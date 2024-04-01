import CourseCard from "../../components/CourseCard/CourseCard";
import { datas } from "../../utils/cardsData";
interface props {
  data:
    | {
        title: string;
        description: string;
        instructor: string;
      }[]
    | any[];
}
const CourseList: React.FC<props> = ({ data }) => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
 gap-8"
    >
      {data.map((item, index) => {
        console.log(item.thumbnail);
        const base64String = btoa(
          String.fromCharCode(...new Uint16Array(item.thumbnail.data.data))
        );
        return (
          <CourseCard
            key={index}
            {...{
              img: `data:image/jpg;base64,${base64String}`,
              title: item.title,
              description: item.description,
              author: item.instructor.username,
            }}
          />
        );
      })}
    </div>
  );
};

export default CourseList;
