import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../@/components/ui/dialog";
import { Button } from "../../../@/components/ui/button";
import { PlayCircle } from "lucide-react";
interface props {
  video: string;
}
const VideoItem: React.FC<props> = ({ video }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <PlayCircle
            className="cursor-pointer"
            // onClick={() => {
            //   setplay(!play);
            // }}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>video Content</DialogTitle>
          <DialogDescription>
            learn the video content by anyone
          </DialogDescription>
        </DialogHeader>
        <video preload="auto" className="w-full h-full" controls>
          <source src={video} type="video/mp4" />
          ;Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  );
};

export default VideoItem;
