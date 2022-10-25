import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Topic from "../../layout/Topic"
import Blog from "../../pages/Blog/Blog";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/course',
                element:<Topic></Topic>
            },

            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            
            
        ]
    }
    


])