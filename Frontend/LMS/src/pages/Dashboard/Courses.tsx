import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import CourseList from "../../sections/Course/CourseList";
import useFetch from "../../Hooks/useFetch";
import { Button } from "../../../@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Courses = () => {
  const { iserror, isloading, data } = useFetch("/course");
  const [new_data, setnew_data] = useState<any>(null);
  useEffect(() => {
    setnew_data(data);
  }, [data]);
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
  console.log(new_data);
  const handleChange = (value: string) => {
    const change = data.filter((item: any) => {
      if (value == "") {
        return true;
      }
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setnew_data(change);
  };
  return (
    <div className="py-4">
      <Link to="/dashboard/addcourse">
        <Button className="float-right mb-5">
          Add Course <Plus />
        </Button>
      </Link>
      {new_data && (
        <div>
          <Filter onChange={handleChange} />
          <CourseList data={new_data} />
        </div>
      )}
      {new_data && new_data.length === 0 && (
        <div className="flex justify-center items-center h-full">
          No data Found
        </div>
      )}
    </div>
  );
};

export default Courses;
