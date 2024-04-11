import React from "react";
import { Input } from "../../@/components/ui/input";
interface filterProps {
  onChange: (name: string) => void;
}
const Filter: React.FC<filterProps> = ({ onChange }) => {
  return (
    <div className="w-full">
      <h4 className="text-xl ">Filter </h4>
      <div className="flex justify-between px-5 items-center">
        <Input
          className="w-[200px] my-4"
          type="text"
          placeholder="Enter the name"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;
