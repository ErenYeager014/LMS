import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../@/components/ui/avatar";
import { Button } from "../../../@/components/ui/button";

const Blogs = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <Avatar>
          <AvatarImage src="../../assets/react.svg" alt="avatar" />
          <AvatarFallback>user</AvatarFallback>
        </Avatar>
      </div>
      <div>title</div>
      <div>content</div>
      <Button>Reply</Button>
    </div>
  );
};

export default Blogs;
