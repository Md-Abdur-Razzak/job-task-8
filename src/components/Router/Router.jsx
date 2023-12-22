import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import Home from "../Home/Home";
import Login from "../userVarifi/Login";
import Regesition from "../userVarifi/Regesition";
import DashBord from "../DashBord/DashBord";
import CreatPost from "../DashBord/CreatPost";
import AllTask from "../DashBord/AllTask";

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainContainer></MainContainer>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Regesition></Regesition>
            }
        ]
    },

    {
        path:'/Dashbord',
        element:<DashBord></DashBord>,
        children:[
            {
                path:"/Dashbord/creatTast",
                element:<CreatPost></CreatPost>
            },
            {
                path:"/Dashbord/allTask",
                element:<AllTask></AllTask>
            }
            
        ]
    }
   
])