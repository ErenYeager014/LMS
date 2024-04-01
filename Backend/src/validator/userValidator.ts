import zod from "zod";

export const signUpvalidator = (data: any) => {
  const signupschema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    password: zod.string(),
    role: zod.string(),
  });
  return signupschema.safeParse(data).success;
};

export const signinValidator = (data: any) => {
  const signupschema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
  });
  return signupschema.safeParse(data).success;
};
