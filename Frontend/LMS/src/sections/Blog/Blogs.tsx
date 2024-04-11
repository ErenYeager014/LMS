import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../@/components/ui/avatar";
import { Button } from "../../../@/components/ui/button";
import { Pencil, Trash2Icon } from "lucide-react";
import useFetch from "../../Hooks/useFetch";
import { useDelete } from "../../Hooks/useDelete";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Input } from "../../../@/components/ui/input";
import { PostFn } from "../../Hooks/Post";
import Reply from "./Reply";
interface props {
  title: string;
  content: string;
  user: string;
  id: string;
  blogid: string;
}
const Blogs: React.FC<props> = ({ title, content, user, id, blogid }) => {
  const userid = useSelector((state: any) => state.id);
  const [reply, setreply] = useState(false);
  const [update, setupdate] = useState({
    title, content
  })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setupdate({
      ...update,
      [e.target.name]: e.target.value,
    })
  }
  const [edit, setedit] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await PostFn(update, `/blog/${blogid}`, "put");
    if (data) {
      toast.success("updated successfully")
      setedit(false)
    } else {
      setedit(false)
    }
  }
  return (
    <div className="flex flex-col shadow-sm shadow-gray-400 rounded-md p-4 my-4">
      <div className="flex flex-row justify-between items-center w-full ">
        <div className="flex gap-3 items-center">
          <Avatar>
            <AvatarImage src="../../assets/react.svg" alt="avatar" />
            <AvatarFallback>{user.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <div>{user}</div>
        </div>
        {
          id === userid &&
          <div className="flex gap-4 float-right">
            <Pencil className="cursor-pointer" onClick={() => setedit(!edit)} />
            <Trash2Icon className="cursor-pointer" onClick={async () => {
              const result = await useDelete(`/blog/${blogid}`)
              if (result?.status) {
                toast.success(result.message)
              } else {
                toast.error(result?.message || "something went wrong")
              }
            }
            } />
          </div>
        }
      </div>
      <div className="py-3">
        <form onSubmit={handleSubmit}>
          {
            edit ? <div>
              <Input type="text" required placeholder="Enter the title" name="title" onChange={handleChange} className="my-2" defaultValue={title} />
              <Input type="text" required placeholder="Enter the content" onChange={handleChange} className="my-4" name='content' defaultValue={content} />
              <Button type="submit"> Submit</Button>
            </div> : <>
              <h6 className="text-xl font-semibold capitalize py-3">{title}</h6>
              <p className="text-[18px] font-light capitalize pb-3">{content}</p>
            </>
          }
        </form>
        <Button
          size={"sm"}
          variant={"outline"}
          className="w-[70px] float-right"
          onClick={() => setreply(!reply)}
        >
          Reply
        </Button>
      </div>
      {
        reply && <Reply id={blogid} />
      }
    </div>
  );
};

export default Blogs;
