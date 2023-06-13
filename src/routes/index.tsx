import {createBrowserRouter} from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
import { Container } from "../components";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Container/>,
        // errorElement:(<h3>چیزی پیدا نکردم متاسفانه!</h3>)
    }
])