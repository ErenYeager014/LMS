import Zod from "zod";

export const lessonValidator = (data: any) => {
  const schema = Zod.object({
    title: Zod.string(),
    content: Zod.string(),
  });

  return schema.safeParse(data).success;
};
