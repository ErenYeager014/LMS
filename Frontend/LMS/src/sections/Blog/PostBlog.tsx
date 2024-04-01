import React from "react";
import { Input } from "../../../@/components/ui/input";
import { Textarea } from "../../../@/components/ui/textarea";
import { Button } from "../../../@/components/ui/button";

const PostBlog = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      <h4 className="text-2xl font-semibold my-4">Post the Blog</h4>
      <Input
        type="text"
        name="title"
        className="w-full"
        placeholder="Enter the title"
      />
      <Textarea
        name="content"
        className="w-full"
        placeholder="Enter the content"
      />
      <Button size={"lg"} className="justify-self-end max-w-[100px]">
        Send
      </Button>
    </div>
  );
};

export default PostBlog;
