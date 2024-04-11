import jwt from "jsonwebtoken";

export const jwtGenerator = (key: string, data: any) => {
  const new_data = jwt.sign(
    {
      ...data,
    },
    key,
    { expiresIn: "2 days" }
  );

  return new_data;
};

export const jwtChecker = (key: string, token: string): boolean | any => {
  let decode: any = {};

  const data = jwt.verify(token, key, (err, decode) => {
    if (err) {
      console.log(err);
      return false;
    }
    return decode;
  });
  return data;
};
