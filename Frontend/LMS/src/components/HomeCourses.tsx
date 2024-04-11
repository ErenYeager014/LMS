import { useSelector } from "react-redux";
import useFetch from "../Hooks/useFetch";
import CourseList from "../sections/Course/CourseList";
import Loading from "./Loading";

const HomeCourses = () => {
  const { iserror, isloading, data } = useFetch("/course");
  if (isloading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (iserror) {
    return <>something went wrong</>;
  }
  return <>{data && <CourseList data={data} />}</>;
};

export default HomeCourses;
