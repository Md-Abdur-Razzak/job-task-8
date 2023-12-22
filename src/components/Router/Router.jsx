import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../MainContainer/MainContainer";
import Home from "../Home/Home";
import Login from "../userVarifi/Login";
import Regesition from "../userVarifi/Regesition";
import DashBord from "../DashBord/DashBord";
import CreatPost from "../DashBord/CreatPost";
import AllTask from "../DashBord/AllTask";
import Contack from "../Home/Contack";
import Update from "../DashBord/Update";
import Services from "../Home/services";
import ErrorPage from "../DashBord/ErrorPage";

export const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainContainer></MainContainer>,
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path:'/contack',
                element:<Contack></Contack>
            },
            {
                path:'/services',
                element:<Services></Services>
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
            },
            {
                path:"/Dashbord/update/:id",
                element:<Update></Update>,
                loader:({params})=>fetch(`https://job-task-client-phi.vercel.app/task/${params.id}`)
            }
            
        ]
    }
   
])