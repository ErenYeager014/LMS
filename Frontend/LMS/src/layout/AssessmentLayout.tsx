import React, { useState } from "react";
import { Button } from "../../@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { PostFn } from "../Hooks/Post";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

interface AssessmentLayoutProps {
  title: string;
  description: string;
  questions: Question[];
  children?: React.ReactNode;
}

const AssessmentLayout: React.FC<AssessmentLayoutProps> = ({
  questions,
  title,
  description,
}) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [score, setScore] = useState(0);

  const handlePrev = () => {
    setCurrentItem((prevItem) => Math.max(prevItem - 1, 0));
  };

  const handleNext = () => {
    setCurrentItem((prevItem) => Math.min(prevItem + 1, questions.length - 1));
  };

  const handleAnswerSelection = (selectedOption: string) => {
    const currentQuestion = questions[currentItem];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };
  const params = useParams();
  const selector: any = useSelector((state) => state);
  return (
    <div className="h-screen">
      <nav className="flex justify-between  w-full items-center bg-gray-100 h-[60px] relative shadow-md shado-gay-100 px-6">
        <div>
          <h1 className="text-xl font-semibold tracking-wide">
            {title.toUpperCase()}
          </h1>
          <p className="text-sm text-muted-foreground">
            {description.length > 70
              ? description.slice(0, 70) + "..."
              : description}
          </p>
        </div>
        <Button
          size={"lg"}
          onClick={async () => {
            const post = PostFn(
              {
                id: selector.id,
                score: (score / questions.length) * 100,
              },
              `/assessment/${params.id}`,
              "put"
            );
            if (post) {
              toast.success("Assessment is Submitted");
            }
          }}
        >
          Submit
        </Button>
      </nav>
      <div className="flex flex-row gap-8 h-full">
        <aside className="w-[300px] hidden md:flex overflow-y-scroll sticky flex-row gap-4 flex-wrap max-h-full p-5 justify-center items-center shadow-sm  shadow-gray-200 bg-gray-200 ">
          {questions.map((_, index) => (
            <Button
              key={index}
              variant={"outline"}
              className="w-[50px] h-[50px]"
              onClick={() => setCurrentItem(index)}
            >
              {index + 1}
            </Button>
          ))}
        </aside>
        <div className="py-5 w-full flex flex-col gap-3">
          <label className="text-2xl font-semibold">
            {questions[currentItem].questionText}
          </label>
          <div className="flex flex-col justify-between h-[80%]">
            <div className="py-2 w-full">
              {questions[currentItem].options.map((option, index) => (
                <div key={index} className=" max-h-[300px]">
                  <input
                    type="radio"
                    id={option}
                    name="answer"
                    value={option}
                    onChange={() => handleAnswerSelection(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
            <div className="justify-self-end *:mx-2 *:float-right px-2">
              <Button size={"icon"} onClick={handleNext}>
                <MoveRight />
              </Button>
              <Button size={"icon"} onClick={handlePrev}>
                <MoveLeft />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentLayout;
