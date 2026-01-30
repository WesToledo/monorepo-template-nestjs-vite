import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import Cookies from "js-cookie";
import axios from "axios";
import type { User } from "@/types";
import { authService } from "@/services/auth-service";


export interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: Record<string, any>) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(
    Cookies.get("accessToken") || null
  );
  const [isLoading, setIsLoading] = useState(true);

  const logout = useCallback(() => {
    Cookies.remove("accessToken");
    localStorage.removeItem("user");
    setAccessToken(null);
    setUser(null);
  }, []);

  const login = useCallback(
    async (credentials: Record<string, any>) => {
      try {
        const { user, accessToken } = await authService.login(credentials);
        
        Cookies.set("accessToken", accessToken, { expires: 7 }); // 7 days
        localStorage.setItem("user", JSON.stringify(user));
        
        setAccessToken(accessToken);
        setUser(user);
      } catch (error) {
        console.error("Login failed:", error);
        throw error;
      }
    },
    []
  );

  const updateUser = useCallback((updatedUser: User) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  }, []);

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      const storedUser = localStorage.getItem("user");
      const token = Cookies.get("accessToken");

      if (token && storedUser) {
        setAccessToken(token);
        setUser(JSON.parse(storedUser));
        
        // Optionally verify token with backend
        try {
          const freshUser = await authService.me();
          updateUser(freshUser);
        } catch (error) {
          console.error("Failed to verify token:", error);
          // If token is invalid, logout
          if (axios.isAxiosError(error) && error.response?.status === 401) {
            logout();
          }
        }

      } else {
        logout();
      }
      
      setIsLoading(false);
    };

    initAuth();
  }, [logout, updateUser]);

  const value = useMemo(
    () => ({
      user,
      accessToken,
      isAuthenticated: !!accessToken && !!user,
      isLoading,
      login,
      logout,
      updateUser,
    }),
    [user, accessToken, isLoading, login, logout, updateUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
