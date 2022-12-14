import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Topic from "../../pages/Topic/Topic"
import AllCourse from "../../pages/AllCourse/AllCourse";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import Course from "../../pages/Course/Course";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Program from "../../pages/Program/Program";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import CheckOutDetails from "../../pages/CheckOutDetails/CheckOutDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/topic',
                element:<Topic></Topic>,
                loader:()=> fetch('https://learning-platform-server-assignment.vercel.app/category')
                
            },
            
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params})=>fetch(`https://learning-platform-server-assignment.vercel.app/course/${params.id}`)
            },
            {
                path:'/program/:id',
                element:<Program></Program>,
                loader:({params})=>fetch(`https://learning-platform-server-assignment.vercel.app/program/${params.id}`)
            },
            
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute> <CheckOutDetails></CheckOutDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://learning-platform-server-assignment.vercel.app/checkout/${params.id}`)

            },
            {
                path:'*',
                element:<div>page not found 404</div>
            }
            
            
        ]
    }
    


])