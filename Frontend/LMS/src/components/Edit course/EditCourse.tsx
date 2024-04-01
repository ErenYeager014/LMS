import React from "react";
import { Input } from "../../../@/components/ui/input";
import { Textarea } from "../../../@/components/ui/textarea";
const EditCourse = () => {
  return (
    <div className="flex flex-col gap-3">
      <Input placeholder="Enter the title" name="title" required />
      <Textarea
        placeholder="Enter the Description"
        name="description"
        required
      />
    </div>
  );
};

export default EditCourse;
