import { RouterProvider, createHashRouter } from "react-router-dom";
import { RouteHomepage } from "./RouteHomepage";

export const router = createHashRouter([
	{
		path: "/",
		element: (
			<RouteHomepage />
		),
	},
]);

export const CustomRouter = (): JSX.Element => {
	return <RouterProvider router={router} />
}