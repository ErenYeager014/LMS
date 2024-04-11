import React, { useEffect, useState } from "react";
import { Axios } from "../Axios/Axios";

const useFetch = (url: string) => {
  const [fetch, setfetch] = useState<{
    iserror: boolean;
    isloading: boolean;
    data:
    | any[]
    | {
      data: any;
    }
    | any;
  }>({
    data: null,
    iserror: false,
    isloading: true,
  });
  useEffect(() => {
    (async () => {
      try {
        const res = await Axios.get(url, {
          headers: {
            Authorization: "Bearer" + " " + localStorage.getItem("token") || "",
          },
        });
        if (res.status === 200) {
          setfetch({
            iserror: false,
            isloading: false,
            data: res.data,
          });
        }
      } catch (err) {
        console.log(err);
        setfetch({
          ...fetch,
          isloading: false,
          iserror: true,
        });
      }
    })();
  }, []);
  return { ...fetch };
};

export default useFetch;

