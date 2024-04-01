import React from "react";
import { Input } from "../../@/components/ui/input";
const Filter = () => {
  return (
    <div className="w-full">
      <h4 className="text-xl ">Filter </h4>
      <div className="flex justify-between px-5 items-center">
        <Input
          className="w-[200px] my-4"
          type="text"
          placeholder="Enter the name"
        />
        <select
          name=""
          id=""
          className="focus:border-2 focus:border-black max-w-[100px] max-h-[30px] rounded-md border-2 border-gray-200"
        >
          <option value="---" selected>
            {" "}
            sort
          </option>
          <option value="ASC"> ASC</option>
          <option value="DES"> DESC</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
