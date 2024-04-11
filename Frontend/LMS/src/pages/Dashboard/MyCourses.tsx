import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Loading from "../../components/Loading";
import Filter from "../../components/Filter";
import CourseList from "../../sections/Course/CourseList";

const MyCourses = () => {
  const { isloading, data, iserror } = useFetch("/mycourse");
  const [new_data, setnew_data] = useState<any>(null);
  useEffect(() => {
    setnew_data(data?.data);
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
  const handleChange = (value: string) => {
    const change = data.data.filter((item: any) => {
      if (value == "") {
        return true;
      }
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setnew_data(change);
  };
  return (
    <div>
      {new_data && (
        <div>
          <Filter onChange={handleChange} />
          <CourseList data={new_data} />
        </div>
      )}
    </div>
  );
};

export default MyCourses;
