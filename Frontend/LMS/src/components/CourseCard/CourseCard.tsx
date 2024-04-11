interface props {
  img: string;
  title: string;
  author: string;
  description: string;
  count?: number | string;
  tags: string[];
  id?: string;
}
import { Link } from "react-router-dom";
import svg from "../../assets/react.svg";
import { Button } from "../../../@/components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../@/components/ui/avatar";
const CourseCard: React.FC<props> = ({
  img,
  title,
  author,
  description,
  id,
  tags,
}) => {
  return (
    <div className="max-w-[350px] flex flex-col justify-between  min-h-[400px] *:py-2 p-4 rounded-lg shadow-md shadow-gray-300 border-[1px] border-gray-200">
      <div>
        <img
          src={img}
          alt={title}
          className="rounded-md w-full max-h-[150px] object-cover"
        />
        <h4 className="text-[18px] py-2 font-semibold uppercase  tracking-wide">
          {title}
        </h4>
      </div>
      <div>
        <div className="flex flex-row h-6 items-center gap-2">
          <Avatar className="w-5 h-5">
            <AvatarImage src={svg} alt="img" />
            <AvatarFallback>{author.slice(0, 1)}</AvatarFallback>
          </Avatar>

          <h6 className="font-semibold uppercase">{author}</h6>
        </div>
        <p className="text-left text-gray-500 text-sm font-[500] mt-2 capitalize  tracking-wide">
          {description.length > 200
            ? `${description.slice(0, 200)} ds...`
            : description}
        </p>
      </div>
      <div className="flex flex-row gap-2 flex-wrap">
        {tags.map((item) => (
          <h6
            key={item}
            className="border-2 max-w-[100px] px-[10px] py-[2px] text-[13px] cursor-pointer uppercase hover:bg-white hover:text-black  border-black rounded-sm font-semibold bg-black text-white"
          >
            {item}
          </h6>
        ))}
      </div>
      <Link to={`/dashboard/course/${id}`}>
        <Button
          variant="default"
          className="w-full rounded-3xl text-[18px] my-2 justify-self-end font-semibold"
        >
          Go to Course
        </Button>
      </Link>
    </div>
  );
};

export default CourseCard;
