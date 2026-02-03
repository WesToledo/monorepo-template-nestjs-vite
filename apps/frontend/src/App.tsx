import { system } from "@/lib/chakra/chakra-theme";
import { AppRouter } from "@/routes";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ColorModeProvider } from "@/components/ui/color-mode";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/lib/react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        <ColorModeProvider>
          <ThemeProvider>
            <AuthProvider>
              <AppRouter />
            </AuthProvider>
          </ThemeProvider>
        </ColorModeProvider>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
