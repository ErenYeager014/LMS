import {
  Tabs,
  TabsTrigger,
  TabsContent,
  TabsList,
} from "../../../../@/components/ui/tabs";
import Lectures from "../../Lectures/Lectures";
import Data from "../../../utils/DashBoard_mock_data.json";
import { tableHeader } from "../../../utils/LatestCourse";
import TableComponent from "../../../components/Table/TableComponent";
import { Button } from "../../../../@/components/ui/button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CourseTabs = ({
  id,
  teacher,
  assessment,
  students,
}: {
  id: string;
  teacher: string;
  students: string[];
  assessment: {
    _id: string;
    title: string;
    description: string;
    expireDate: string;
    duration: number;
    completed: {
      id: string;
      isCompleted: boolean;
      score: number;
    }[];
  }[];
}) => {
  const selector: any = useSelector((state) => state);
  console.log(teacher, "instructor");
  return (
    <div className="w-full my-4">
      <Tabs defaultValue="lesson">
        <TabsList className=" w-[100%] md:w-[50%] flex *:flex-1">
          <TabsTrigger value="lesson">Lesson</TabsTrigger>
          {["admin", "instructor"].includes(selector.role) && (
            <TabsTrigger value="students">Students</TabsTrigger>
          )}
          <TabsTrigger value="assessment">Assessment</TabsTrigger>
        </TabsList>
        <TabsContent value="lesson">
          <div className="w-full p-4 ">
            {selector.role === "admin" ||
            selector.id === teacher ||
            (selector.role === "student" && students.includes(selector.id)) ? (
              <Lectures id={id} />
            ) : (
              <>You are not have access for this course this course</>
            )}
            {selector.role !== "student" &&
              (selector.id === teacher || selector.role === "admin") && (
                <Link
                  to={`/dashboard/addlesson/${id}`}
                  className="float-right my-4"
                >
                  <Button>Add Lesson + </Button>
                </Link>
              )}
          </div>
        </TabsContent>
        {["admin", "instructor"].includes(selector.role) && (
          <TabsContent value="students">
            <TableComponent
              title="latest Courses"
              isSearchable={true}
              isSortable={false}
              header={tableHeader}
              data={Data.slice(0, 20)}
              isPagination={false}
            />
          </TabsContent>
        )}
        <TabsContent value="assessment">
          {selector.role === "admin" ||
          selector.id === teacher ||
          (selector.role === "student" && students.includes(selector.id)) ? (
            assessment.map((item, index) => {
              const date = new Date(item.expireDate);
              const isFind = item.completed.find(
                (item) => item.id === selector.id
              );
              return (
                <div className="w-full *:py-2 flex justify-between gap-5 items-center shadow-lg shadow-gray-300 p-3 border-2 border-gray-200">
                  <div>
                    <h1 className="uppercase text-xl font-mono font-semibold">
                      {item.title}
                    </h1>
                    <p className=" text-[13px] font-light text-wrap max-w-[100%]">
                      {item.description.length > 300
                        ? item.description.slice(0, 250) + "..."
                        : item.description}
                    </p>
                    <div className="*:py-2">
                      <p>Expires on: {date.toDateString()}</p>
                      <p>Duration:{item.duration}</p>
                    </div>
                  </div>
                  {!(isFind && selector.role === "student") ? (
                    <Link to={`/dashboard/assessment/${item._id}`}>
                      <Button>Start</Button>
                    </Link>
                  ) : (
                    <Button disabled>{isFind.score || "Not viewable"}</Button>
                  )}
                </div>
              );
            })
          ) : (
            <>You are not have access for this course this course</>
          )}
          {selector.role !== "student" &&
            (selector.id === teacher || selector.role === "admin") && (
              <Link
                to={`/dashboard/create-assessment/${id}`}
                className="float-right my-4"
              >
                <Button>Add Lesson + </Button>
              </Link>
            )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseTabs;
