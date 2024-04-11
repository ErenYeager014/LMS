import { Axios } from "../Axios/Axios";
import { toast } from "react-hot-toast";
export const PostFn = async (
  data: any,
  route: string,
  request: "post" | "put",
  type = "application/json"
) => {
  try {
    const res =
      request === "post"
        ? await Axios.post(route, data, {
            headers: {
              "Content-Type": type,
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
        : await Axios.put(route, data, {
            headers: {
              "Content-Type": type,
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
    return res.data;
  } catch (error) {
    toast.error("Something wen wrong");
    console.log(error);
  }
};
