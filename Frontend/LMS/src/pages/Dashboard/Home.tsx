import TableComponent from "../../components/Table/TableComponent";
import { tableHeader } from "../../utils/LatestCourse";
import Data from "../../utils/DashBoard_mock_data.json";
import Startup from "../../sections/Startup";
import { Bar, Pie } from "react-chartjs-2";
import { ChartData } from "../../utils/Charts/Data";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import { useState } from "react";
const Home = () => {
  Chart.register(CategoryScale);
  const [chartsData, setChartsData] = useState({
    labels: ChartData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: ChartData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <>
      <Startup />
      <div className="my-3">
        <div className="flex gap-6">
          <Bar
            className="my-2 max-w-[700px] max-h-[500px]"
            data={chartsData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Users Gained between 2016-2020",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
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
        <TableComponent
          title="latest Courses"
          isSearchable={true}
          isSortable={false}
          header={tableHeader}
          data={Data.slice(0, 20)}
          isPagination={false}
        />
      </div>
    </>
  );
};

export default Home;
