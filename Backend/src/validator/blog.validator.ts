import zod from "zod";
export const blogvalidator = (data: any) => {
  const schema = zod.object({
    title: zod.string(),
    content: zod.string(),
  });
  return schema.safeParse(data).success;
};
