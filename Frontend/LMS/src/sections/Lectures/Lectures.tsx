import React from "react";
import { Accordion } from "../../../@/components/ui/accordion";
import AccordItem, { accprops } from "../../components/Lecture-Item/AccordItem";
import useFetch from "../../Hooks/useFetch";
import Loading from "../../components/Loading";
interface props {
  datas?: accprops[];
  id: string;
}
const Lectures: React.FC<props> = ({ datas, id }) => {
  const { iserror, isloading, data } = useFetch(`/lesson/${id}`);
  if (isloading) {
    return <Loading />;
  }
  if (iserror) {
    return <>Something went wrong</>;
  }

  return (
    <Accordion
      type="multiple"
      className="w-full md:max-w-[60%] shadow-sm shadow-gray-400 p-4 rounded-sm border-2 border-gray-100"
    >
      {data &&
        data.map((item: any, index: number) => (
          <AccordItem
            id={item._id}
            key={index}
            title={item.title}
            description={item.content}
            file={item.file}
            fileType={item.fileType}
          />
        ))}
    </Accordion>
  );
};

export default Lectures;
