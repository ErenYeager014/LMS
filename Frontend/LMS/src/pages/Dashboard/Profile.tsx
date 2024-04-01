import React, { ChangeEvent, FormEventHandler, useState } from "react";
import { Input } from "../../../@/components/ui/input";
import { Button } from "../../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../@/components/ui/card";
import { Table, TableCell, TableRow } from "../../../@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import { initialstate, login } from "../../Global/Slice";
import { UpdateIcon } from "@radix-ui/react-icons";
import { PostFn } from "../../Hooks/Post";

const Profile = () => {
  const [isUpdate, setisUpdate] = useState(false);
  const handleupdate = () => {
    setisUpdate(!isUpdate);
  };
  const selector: initialstate = useSelector((state) => state);
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <div>
          <CardTitle>Profile</CardTitle>
          <CardDescription>User Details of the Loggged-In user</CardDescription>
        </div>
        <div>
          <Button size={"icon"} onClick={handleupdate}>
            <UpdateIcon />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {isUpdate ? (
          <ProfileForm {...selector} />
        ) : (
          <ProfileTable {...selector} />
        )}
      </CardContent>
    </Card>
  );
};

const ProfileTable: React.FC<initialstate> = ({ username, email, role }) => {
  return (
    <Table className="max-w-[100%] text-left ">
      <TableRow className="border-none px-3 py-4">
        <TableCell>Name</TableCell>
        <TableCell>{username}</TableCell>
      </TableRow>
      <TableRow className="border-none px-3 py-4">
        <TableCell>Email</TableCell>
        <TableCell>{email}</TableCell>
      </TableRow>
      <TableRow className="border-none px-3 py-4">
        <TableCell>Role</TableCell>
        <TableCell>{role}</TableCell>
      </TableRow>
    </Table>
  );
};

const ProfileForm: React.FC<initialstate> = (data) => {
  const [input, setinput] = useState({
    ...data,
  });
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setinput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await PostFn(input, "/user", "put");
    if (data) {
      dispatch(login(input));
    }
  };
  return (
    <form
      className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full"
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        placeholder="E-mail ID"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleChange}
      />
      <Button type="submit" className="md:max-w-[200px] col-span-2">
        Submit
      </Button>
    </form>
  );
};
export default Profile;
