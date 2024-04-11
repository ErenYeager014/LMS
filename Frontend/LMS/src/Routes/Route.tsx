import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import ProtectedRouters from "./ProtectedRouters";
import Assessment from "../pages/Dashboard/Assessment";
import NotFound from "../pages/404";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/*" Component={ProtectedRouters} />
        <Route path="/" Component={SignIn} />
        <Route path="/assessment" Component={Assessment} />
        <Route path="/signup" Component={SignUp} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
