
import {ReactNode} from "react";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";

enum RouterPaths {
    MAIN = '/',
    ABOUT = '/about',
}

interface RouterProps {
    path: RouterPaths;
    element: ReactNode;
}

export const Routes: Record<RouterPaths, RouterProps> = {
    [RouterPaths.MAIN]: {
        path: RouterPaths.MAIN,
        element: <MainPage />,

    },
    [RouterPaths.ABOUT]: {
        path: RouterPaths.ABOUT,
        element: <AboutPage />,
    }
};
// {['/']: {path: '/', element: <MainPage /> }, [/about]: {path: '/about', element: <AboutPage /> }}