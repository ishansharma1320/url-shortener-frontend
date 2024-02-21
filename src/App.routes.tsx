import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout/AuthLayout";
import AuthForm from "./components/layouts/AuthLayout/Auth/AuthForm";
import HomeLayout from "./components/layouts/HomeLayout/HomeLayout"
  
  
  
  

const router = createBrowserRouter([
    { path: "/", element:  <Navigate to="auth/login"  /> },
    {path: "/home", element: <HomeLayout />},
    {
    path: "/auth",
    element: <AuthLayout />,
    children: [
    
      { path: "login", element: <AuthForm isSignUp={false}/> },
      { path: "signup", element: <AuthForm isSignUp={true}/> },
    ],
  },
  ])

export default router;
