import zod from "zod";

export const coursevalidation = (data: any) => {
  const courseSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    tags: zod.array(zod.string()).or(zod.string()),
  });

  return courseSchema.safeParse(data).success;
};
