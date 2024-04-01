import { useState } from "react";
import AssessmentLayout from "../../layout/AssessmentLayout";
import { questions } from "../../utils/assessment";
import { Button } from "../../../@/components/ui/button";
import { MoveLeft, MoveLeftIcon, MoveRight, MoveRightIcon } from "lucide-react";

const Assessment = () => {
  const [Item, setItem] = useState({
    currentItem: 0,
    isLast: function () {
      return questions.length - 1 === this.currentItem;
    },
  });
  const prevFn = function () {
    if (!(Item.currentItem <= 0)) {
      setItem((prev) => ({ ...prev, currentItem: prev.currentItem - 1 }));
    }
  };
  const nextFn = function () {
    if (!Item.isLast()) {
      setItem((prev) => ({ ...prev, currentItem: prev.currentItem + 1 }));
    }
  };
  return (
    <AssessmentLayout questions={questions}>
      <div className="py-5 w-full flex flex-col gap-3">
        <label className="text-2xl font-semibold">
          {questions[Item.currentItem].questionText}
        </label>
        <div className="flex flex-col justify-between h-[80%]">
          <div className="py-2 w-full">
            {questions[Item.currentItem].options.map((item, index) => (
              <div key={index} className=" max-h-[300px]">
                <input
                  type="radio"
                  key={index}
                  id={item}
                  name={questions[Item.currentItem].correctAnswer}
                  value={item}
                />
                <label htmlFor={item} key={index}>
                  {item}
                </label>
              </div>
            ))}
          </div>
          <div className="justify-self-end *:mx-2 *:float-right px-2">
            <Button size={"icon"} onClick={nextFn}>
              <MoveRight />
            </Button>
            <Button size={"icon"} onClick={prevFn}>
              <MoveLeft />
            </Button>
          </div>
        </div>
      </div>
    </AssessmentLayout>
  );
};

export default Assessment;
