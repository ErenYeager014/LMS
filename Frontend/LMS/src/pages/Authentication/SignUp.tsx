import Account from "../../components/Accounts/Account";
import { Input } from "/@/components/ui/input";
const SignUp = () => {
  return (
    <Account title="Sign Up" text="Sign Up">
      <Input
        type="email"
        placeholder="Enter the Email"
        className="w-full text-white my-5"
      />
      <Input
        type="text"
        placeholder="Enter the Username"
        className="w-full text-white my-5"
      />
      <Input
        type="password"
        placeholder="Enter the password"
        className="w-full text-white my-5 "
      />
    </Account>
  );
};

export default SignUp;
