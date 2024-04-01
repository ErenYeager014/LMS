import { Edit, Plus } from "lucide-react";
import FloatingIcon from "../../components/FloatingIcon";
import CourseTabs from "../../sections/Course/CourseInfo/CourseTabs";
import CourseHeader from "../../sections/Course/CourseInfo/Header";
import Models from "../../components/model";
import EditCourse from "../../components/Edit course/EditCourse";
import { useState } from "react";
const Coursepage = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleModel = () => {
    setisOpen(!isOpen);
  };
  return (
    <div>
      <CourseHeader />
      <CourseTabs />
      <Models
        title="Edit the Course"
        description="Edit the course of the selected data"
        Content={EditCourse}
        isOpen={isOpen}
        handleModel={handleModel}
      >
        <FloatingIcon Icon={Edit} handleModel={handleModel} />
      </Models>
    </div>
  );
};

export default Coursepage;
