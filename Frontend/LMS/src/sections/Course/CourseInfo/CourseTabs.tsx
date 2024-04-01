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
const CourseTabs = () => {
  return (
    <div className="w-full my-4">
      <Tabs defaultValue="lesson">
        <TabsList className="grid w-[100%] md:w-[50%] grid-cols-3">
          <TabsTrigger value="lesson">Lesson</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="roadmap">Assessment</TabsTrigger>
        </TabsList>
        <TabsContent value="lesson">
          <div className="w-full p-4 ">
            <Lectures
              data={[
                {
                  title: "Web Developer",
                  description:
                    "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                  title: "Mobile App Developer",
                  description:
                    "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
                {
                  title: "Blockchain Developer",
                  description:
                    "What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                },
              ]}
            />
          </div>
        </TabsContent>
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
        <TabsContent value="roadmap">
          <div className="w-full flex justify-between items-center shadow-lg shadow-gray-300 p-3 border-2 border-gray-200">
            <div>
              <h1 className="uppercase text-xl font-mono font-semibold">
                title
              </h1>
              <p className="font-thin text-wrap ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
                exercitationem nostrum, id...
              </p>
            </div>
            <Button>Start</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseTabs;
