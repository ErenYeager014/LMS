import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Dashboard/Home";
import DashboardLayout from "../layout/Dashboard.Layout";
import Coursepage from "../pages/Dashboard/Coursepage";
import { useSelector } from "react-redux";
import User from "../pages/Dashboard/User";
import Courses from "../pages/Dashboard/Courses";
import Profile from "../pages/Dashboard/Profile";
import Blog from "../pages/Dashboard/Blog";
import AddCourse from "../pages/Dashboard/AddCourse";
import AddLesson from "../pages/Dashboard/AddLesson";
import { AddAssessments } from "../pages/Dashboard/AddAssessments";
import MyCourses from "../pages/Dashboard/MyCourses";
import NotFound from "../pages/404";
import Assessment from "../pages/Dashboard/Assessment";

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
        {(data.role === "admin" || data.role === "instructor") && (
          <>
            <Route path="/addcourse" Component={AddCourse} />
            <Route path="/addlesson/:id" Component={AddLesson} />
            <Route path="/create-assessment/:id" Component={AddAssessments} />
            <Route path="/editcourse/:id" Component={AddCourse} />
            <Route path="/editlesson/:id" Component={AddLesson} />
          </>
        )}
        {data.role !== "admin" && (
          <Route path="/mycourse" Component={MyCourses} />
        )}
        <Route path="/profile" Component={Profile} />
        <Route path="/course" Component={Courses} />
        <Route path="/blog" Component={Blog} />
        <Route path="/course/:id" Component={Coursepage} />
        <Route path="*" Component={NotFound} />
      </Route>
      <Route path="/assessment/:id" Component={Assessment} />
    </Routes>
  );
};

export default ProtectedRouters;
