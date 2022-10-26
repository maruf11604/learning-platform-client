import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Topic from "../../pages/Topic/Topic"
import AllCourse from "../../pages/AllCourse/AllCourse";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import Course from "../../pages/Course/Course";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";

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
                loader:()=> fetch('http://localhost:5000/category')
                
            },
            
            {
                path:'/category/:id',
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
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