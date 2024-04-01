import React from "react";
interface props {
  type: string;
  name: string;
  placeholder: string;
  onChange: (e: any) => void;
}
const SearchInput: React.FC<props> = (props) => {
  return (
    <input
      {...props}
      className="p-2 bg-gray-300 border-2 border-gray-400 rounded-md"
    />
  );
};

export default SearchInput;
