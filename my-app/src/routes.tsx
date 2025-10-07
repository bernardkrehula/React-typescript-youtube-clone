import { createBrowserRouter } from "react-router";
import App from "./App";
import LoadingPage from "./pages/LoadingPage/LoadingPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LoadingPage />
            }
        ]
    }
])

export default router;