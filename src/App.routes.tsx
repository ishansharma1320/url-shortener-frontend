import { Navigate, createBrowserRouter } from "react-router-dom";
import AuthLayout from "./components/layouts/AuthLayout/AuthLayout";
import AuthForm from "./components/layouts/login/AuthForm";

  
  
  
  

const router = createBrowserRouter([
    { path: "/", element:  <Navigate to="auth/login"  /> },
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
