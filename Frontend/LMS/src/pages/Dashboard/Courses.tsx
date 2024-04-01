import React from "react";
import Filter from "../../components/Filter";
import CourseList from "../../sections/Course/CourseList";
import useFetch from "../../Hooks/useFetch";

const Courses = () => {
  const { iserror, isloading, data } = useFetch("/course");
  if (isloading) {
    return <>loading...</>;
  }
  if (iserror) {
    return <>something went wrong</>;
  }
  console.log(data);
  return (
    <div>
      {data && (
        <div>
          <Filter />
          <CourseList data={data} />
        </div>
      )}
    </div>
  );
};

export default Courses;
