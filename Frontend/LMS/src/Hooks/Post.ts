import { Axios } from "../Axios/Axios";
export const PostFn = async (
  data: any,
  route: string,
  request: "post" | "put"
) => {
  try {
    const res =
      request === "post"
        ? await Axios.post(route, data)
        : await Axios.put(route, data);
    if (res.status === 200) {
      return res.data;
    }
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
