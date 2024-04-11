type props = {
  title: string;
  description: string;
  img: string;
  id?: string;
  isEnrolled?: boolean;
  student: string[];
  instructor: string;
};
import { useSelector } from "react-redux";
import { Button } from "../../../../@/components/ui/button";
import { initialstate } from "../../../Global/Slice";
import { Pen, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Axios } from "../../../Axios/Axios";
import { PostFn } from "../../../Hooks/Post";
import toast from "react-hot-toast";
const CourseHeader = ({
  title,
  description,
  img,
  isEnrolled,
  id,
  instructor,
}: props) => {
  const selector: initialstate = useSelector((state: initialstate) => state);
  const handleEnroll = async () => {
    try {
      const res = await PostFn(
        {
          courseId: id,
        },
        "/course/enroll",
        "post"
      );
      if (res) {
        toast.success("You are successfully Enrolled the course");
      }
    } catch (error) {}
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold p-2">{title}</h1>
        <div className="*:inline *:mr-4 *:cursor-pointer">
          {selector.id === instructor && selector.role === "admin" && (
            <>
              <Trash className="mt-1" />
              <Link to={`/dashboard/editcourse/${id}`} className=" *:inline">
                <Pen className="mt-1" />
              </Link>
            </>
          )}
          {isEnrolled &&
          selector.role !== "admin" &&
          selector.role !== "instructor" ? (
            <Button variant={"outline"} onClick={handleEnroll}>
              Enroll
            </Button>
          ) : (
            <Button variant={"outline"} disabled>
              Enrolled
            </Button>
          )}
        </div>
      </div>
      <hr />
      <div className="flex flex-row gap-6 flex-wrap items-center p-4">
        <div className="flex-[50%] max-w-[100%]">
          <h2 className="text-2xl my-4 font-semibold">Description</h2>
          <p className="text-md text-gray-400 font-semibold">{description}</p>
        </div>
        <div className="max-w-[100%] mx-auto md:max-w-[500px] justify-self-end flex-[50%] ">
          <img
            src={`data:image/jpg;base64,${img}`}
            alt="*tube"
            className="object-contain w-[100%] shadow-lg shadow-gray-400 "
          />
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
