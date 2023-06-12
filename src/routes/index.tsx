import {createBrowserRouter} from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
import { SignUp } from "../components";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <SignUp/>,
        // errorElement:(<h3>چیزی پیدا نکردم متاسفانه!</h3>)
    }
])