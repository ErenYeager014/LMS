import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Dashboard/Home";
import DashboardLayout from "../layout/Dashboard.Layout";
import Coursepage from "../pages/Dashboard/Coursepage";
import { useSelector } from "react-redux";
import User from "../pages/Dashboard/User";
import Courses from "../pages/Dashboard/Courses";
import Profile from "../pages/Dashboard/Profile";
import Blog from "../pages/Dashboard/Blog";

const ProtectedRouters = () => {
  const data: any = useSelector((state) => state);
  console.log(data);
  if (!data.isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <Routes>
      <Route path="/" Component={DashboardLayout}>
        <Route index Component={Home} />
        <Route path="/user" Component={User} />
        <Route path="/profile" Component={Profile} />
        <Route path="/course" Component={Courses} />
        <Route path="/blog" Component={Blog} />
        <Route path="/course/:id" Component={Coursepage} />
      </Route>
    </Routes>
  );
};

export default ProtectedRouters;
