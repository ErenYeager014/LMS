import React from "react";
import { Button } from "../../@/components/ui/button";
interface props {
  questions: {
    questionText: string;
    options: string[];
    correctAnswer: string;
  }[];
  children: React.ReactNode;
}
const AssessmentLayout: React.FC<props> = ({ questions, children }) => {
  return (
    <div className="h-screen">
      <nav className="flex justify-between  w-full items-center bg-gray-100 h-[60px] relative shadow-md shado-gay-100 px-6">
        <h1 className="text-xl font-semibold tracking-wide">
          Assessment Title
        </h1>
        <Button size={"lg"}>Submit</Button>
      </nav>
      <div className="flex flex-row gap-8 h-full">
        <aside className="max-w-[300px] hidden md:flex overflow-y-scroll sticky flex-row gap-4 flex-wrap max-h-full p-5 justify-center items-center shadow-sm  shadow-gray-200 bg-gray-200 ">
          {questions.map((item, index) => {
            return (
              <Button
                key={index}
                variant={"outline"}
                className="w-[50px] h-[50px]"
              >
                {index + 1}
              </Button>
            );
          })}
        </aside>
        {children}
      </div>
    </div>
  );
};

export default AssessmentLayout;
