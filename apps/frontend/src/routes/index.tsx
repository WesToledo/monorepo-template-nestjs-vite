import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { publicRoutes } from './public-routes/public-routes';
import { privateRoutes } from './private-routes/private-routes';

const router = createBrowserRouter([
  {
		path: "/",
		children: [...publicRoutes, ...privateRoutes],
	},
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
