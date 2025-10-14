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
            },
            {
                path: '/Trending',
                element: <LoadingPage />
            },
            {
                path: '/Coding',
                element: <LoadingPage />
            },
            {
                path: '/Javascript',
                element: <LoadingPage />
            },
            {
                path: '/ReactJS',
                element: <LoadingPage />
            },
            {
                path: '/Music',
                element: <LoadingPage />
            },
            {
                path: '/Education',
                element: <LoadingPage />
            },
            {
                path: '/Podcast',
                element: <LoadingPage />
            },
            {
                path: '/Movie',
                element: <LoadingPage />
            },
            {
                path: '/Gaming',
                element: <LoadingPage />
            },
            {
                path: '/Live',
                element: <LoadingPage />
            },
            {
                path: '/Fashion',
                element: <LoadingPage />
            },
            {
                path: '/Beauty',
                element: <LoadingPage />
            }
        ]
    }
])

export default router;