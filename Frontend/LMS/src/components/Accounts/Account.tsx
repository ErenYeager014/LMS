import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "/@/components/ui/card";
import { Button } from "/@/components/ui/button";
import { Link } from "react-router-dom";

type props = {
  children: React.ReactNode;
  title: string;
  text: string;
  postFn?: () => void;
};
const Account: React.FC<props> = ({ children, title, text, postFn }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (postFn) {
      postFn();
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px] bg-transparent rounded-lg min-h-[370px] shadow-lg shadow-gray-400">
        <CardHeader className="inline-block w-full">
          <CardTitle className="w-full text-5xl py-6 text-[700] font-[600] text-center ">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {children}
            <Button type="submit" className="w-full my-4">
              {text}
            </Button>
            <div className="text-sm text-center">
              {title === "Login" ? (
                <>
                  Didn't have any account{" "}
                  <Link
                    to={"/signup"}
                    className="text-blue-600 underline leading-3"
                  >
                    Create a account
                  </Link>
                </>
              ) : (
                <>
                  already have an account
                  <Link to={"/"} className="text-blue-600 underline leading-3">
                    {title}
                  </Link>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Account;
