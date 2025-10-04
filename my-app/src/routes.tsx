import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Trending from "./pages/Trending/Trending";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/Trending',
                element: <Trending />
            }
        ]
    }
])

export default router;