import { createBrowserRouter, Navigate } from "react-router";
import Arena from "../views/arena";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/graph" replace />
    },

    {
        path: '/graph',
        element: <Arena/>
    }
])