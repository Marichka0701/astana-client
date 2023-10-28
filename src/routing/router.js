import {createBrowserRouter, Navigate} from "react-router-dom";

import {MAIN_ROUTES} from "./main_routes";
import MainLayout from "../layouts/MainLayout/MainLayout";

export const router = createBrowserRouter([
    {
        index: true,
        element: <Navigate to={MAIN_ROUTES.LIVE_TRACKING}/>
    },
    {
        path: MAIN_ROUTES.LIVE_TRACKING,
        element: <MainLayout/>,
    },
]);