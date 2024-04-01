import React from "react";
interface props {
  children: React.ReactNode;
  Content: React.ReactElement<any>;
  title: string;
  description: string;
  handleModel: () => void;
  isOpen: boolean;
}
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../@/components/ui/card";
import { Button } from "../../@/components/ui/button";
const Models: React.FC<props> = ({
  children,
  Content,
  title,
  description,
  isOpen,
  handleModel,
}) => {
  return (
    <>
      {!isOpen && children}
      <div
        className={`${isOpen ? "fixed" : "hidden"} top-[0%] left-0 w-full h-full bg-[rgba(0,0,0,.8)] flex justify-center items-center`}
      >
        <Card className="w-[80%] md:w-[400px] bg-white rounded-md max-h-[400px]">
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <form action="#">
            <CardContent>
              <Content />
            </CardContent>
            <CardFooter>
              <Button
                variant={"default"}
                type="submit"
                size="lg"
                color="black"
                className="mr-2"
              >
                Submit
              </Button>
              <Button
                variant={"outline"}
                type="submit"
                size="lg"
                onClick={handleModel}
              >
                cancel
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
};

export default Models;
