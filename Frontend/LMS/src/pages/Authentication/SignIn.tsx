import { ChangeEvent, useEffect, useState } from "react";
import Account from "../../components/Accounts/Account";
import { Input } from "../../../@/components/ui/input";
import { PostFn } from "../../Hooks/Post";
import { useDispatch, useSelector } from "react-redux";
import { initialstate } from "../../Global/Slice";
import { login as SetLogin } from "../../Global/Slice";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const selector: initialstate = useSelector((state: initialstate) => state);
  const route = useNavigate();
  if (selector.isAuthenticated) {
    route("/dashboard/");
  }
  const dispatch = useDispatch();
  const [Login, setLogin] = useState({ email: "", password: "" });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...Login,
      [e.target.name]: e.target.value,
    });
  };
  const login = async () => {
    const data = await PostFn(Login, "/signin", "post");
    if (!data.message) {
      dispatch(SetLogin(data));
      localStorage.setItem("token", data.token);
      localStorage.setItem("global", JSON.stringify(data));
      route("/dashboard/");
    }
  };
  return (
    <Account text="Login" title="Login" postFn={login}>
      <Input
        type="text"
        placeholder="Enter the Email"
        className="w-full  my-5"
        onChange={handleChange}
        name="email"
        required
      />
      <Input
        type="password"
        placeholder="Enter the password"
        className="w-full my-4"
        name="password"
        onChange={handleChange}
        required
      />
    </Account>
  );
};

export default SignIn;
