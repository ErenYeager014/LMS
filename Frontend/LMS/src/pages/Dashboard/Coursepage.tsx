import CourseTabs from "../../sections/Course/CourseInfo/CourseTabs";
import CourseHeader from "../../sections/Course/CourseInfo/Header";

import { useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Coursepage = () => {
  const params = useParams();
  const selector: any = useSelector((state) => state);
  const [isOpen, setisOpen] = useState(false);
  const { iserror, isloading, data } = useFetch(`/course/${params.id}`);
  const handleModel = () => {
    setisOpen(!isOpen);
  };
  if (isloading) {
    return <>Loading...</>;
  }
  if (iserror) {
    return <>Something Went Wrong</>;
  }
  const base64String = btoa(
    String.fromCharCode(...new Uint16Array(data.thumbnail.data.data))
  );
  return (
    <div>
      <CourseHeader
        instructor={data.instructor}
        title={data.title}
        description={data.description}
        img={base64String}
        isEnrolled={!data.students.includes(selector.id)}
        student={data.students}
        id={data._id}
      />
      <CourseTabs
        id={data._id}
        students={data.students}
        teacher={data.instructor}
        assessment={data.assessment}
      />
    </div>
  );
};

export default Coursepage;
