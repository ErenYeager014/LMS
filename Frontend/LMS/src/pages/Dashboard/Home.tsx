import Startup from "../../sections/Startup";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";
import CourseList from "../../sections/Course/CourseList";
import HomeCourses from "../../components/HomeCourses";
const Home = () => {
  const { iserror, isloading, data } = useFetch("/dashboard");

  const selector: any = useSelector((state) => state);
  useEffect(() => {
    if (data) {
      setChartsData({
        labels: ["admin", "instructor", "student"],
        datasets: [
          {
            label: "User List",
            data: data && data.UserList && Object.values(data?.UserList),
            backgroundColor: ["rgba(75,192,192,1)", "#3145", "#50AF95"],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    }
  }, [data]);
  Chart.register(CategoryScale);
  const [chartsData, setChartsData] = useState({
    labels: ["admin", "instructor", "student"],
    datasets: [
      {
        label: "User List",
        data: (data?.UserList && Object.values(data?.UserList)) || [],
        backgroundColor: ["rgba(75,192,192,1)", "#3145", "#50AF95"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  if (isloading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (iserror) {
    return <>Something went wrong</>;
  }

  return (
    <>
      {data && (
        <>
          <Startup data={data} />
          <div className="my-3">
            {selector.role !== "student" && (
              <div className="flex gap-6">
                <Pie
                  className="max-w-[400px] max-h-[500px]"
                  data={chartsData}
                  options={{
                    plugins: {
                      title: {
                        display: true,
                        text: "Users Gained between 2016-2020",
                      },
                    },
                  }}
                />
              </div>
            )}
            {selector.role === "student" && (
              <div>
                <h2 className="py-3 text-xl font-semibold uppercase px-4">
                  Course
                </h2>
                <HomeCourses />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
