import zod from "zod";

export const assessmentvalidator = (data: any) => {
  const Schema = zod.object({
    title: zod.string(),
    description: zod.string(),
    duration: zod.number(),
    expireDate: zod.string(),
    questions: zod.array(
      zod.object({
        questionText: zod.string(),
        options: zod.array(zod.string()),
        correctAnswer: zod.string(),
      })
    ),
  });
  return Schema.safeParse(data).success;
};

export const completedValidator = (data: any) => {
  const schema = zod.object({
    id: zod.string(),
    score: zod.number(),
  });
  return schema.safeParse(data).success;
};
