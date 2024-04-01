import zod from "zod";

export const replyvalidator = (data: any) => {
  const schema = zod.object({
    content: zod.string(),
  });
  return schema.safeParse(data).success;
};
