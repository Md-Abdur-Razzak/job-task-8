import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import Home from "../Home/Home";

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainContainer></MainContainer>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
   
])