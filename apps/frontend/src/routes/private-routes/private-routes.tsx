import { Outlet, type RouteObject } from "react-router";
import { ProtectedRoute } from "@/routes/helpers/private-route";

export const privateRoutes: RouteObject[] = [
	{
		children: [
			{
				path: "/outlet",
				element: (
					<ProtectedRoute>
						<Outlet />
					</ProtectedRoute>
				),
			},
		],
	},
];
