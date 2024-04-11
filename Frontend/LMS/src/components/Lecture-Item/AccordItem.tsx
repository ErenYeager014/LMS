import {
  Download,
  DownloadCloudIcon,
  Eye,
  Pencil,
  PlayCircle,
  Trash,
} from "lucide-react";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../@/components/ui/accordion";
import axios from "axios";
import { useState } from "react";
import { Button } from "../../../@/components/ui/button";
import VideoItem from "./VideoItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDelete } from "../../Hooks/useDelete";
import toast from "react-hot-toast";

export interface accprops {
  id: string;
  title: string;
  description: string;
  file?: string;
  fileType?: string;
}
const AccordItem: React.FC<accprops> = ({
  id,
  title,
  description,
  file,
  fileType,
}) => {
  const [url, seturl] = useState("");
  const [play, setplay] = useState(false);
  (async () => {
    const result = await axios.get(`http://localhost:8080/${file}`, {
      responseType: "blob",
    });
    const url = window.URL.createObjectURL(new Blob([result.data]));
    seturl(url);
  })();
  const selector: any = useSelector((state) => state);
  const handleDelete = async () => {
    const res = await useDelete(`/lessons/${id}`);
    if (res) {
      toast.success("lesson is deleted");
    }
  };
  return (
    <>
      <AccordionItem value={title}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <div className="p-4 flex flex-row gap-4 items-center justify-between">
            <p className="text-sm text-gray-500">{description}</p>
            <div>
              {(selector.role === "admin" ||
                selector.role === "instructor") && (
                <>
                  <Link to={`/dashboard/editlesson/${id}`}>
                    <Button variant={"outline"} size={"icon"} className="mr-2">
                      <Pencil className="cursor-pointer" />
                    </Button>
                  </Link>
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className="mr-2"
                    onClick={handleDelete}
                  >
                    <Trash className="cursor-pointer" />
                  </Button>
                </>
              )}
              {fileType === "application/pdf" ? (
                <a
                  href={`http://localhost:8080/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size={"icon"} variant={"outline"}>
                    <Eye
                      className="cursor-pointer"
                      // onClick={() => {
                      //   setplay(!play);
                      // }}
                    />
                  </Button>
                </a>
              ) : (
                <>
                  <VideoItem video={`http://localhost:8080/${file}`} />
                  {/* {!play && (
                  <Button size={"icon"} variant={"outline"}>
                  <PlayCircle
                  className="cursor-pointer"
                  onClick={() => {
                    setplay(!play);
                      }}
                      />
                      </Button>
                    )}
                    {play && (
                      <video preload="auto" width="320" height="240" controls>
                      <source
                      src={`http://localhost:8080/${file}`}
                      type="video/mp4"
                      />
                      ;Your browser does not support the video tag.
                      </video>
                    )}
                  </> */}
                </>
              )}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default AccordItem;
