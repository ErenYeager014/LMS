import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../../@/components/ui/button";
import { Minus, PlusCircle } from "lucide-react";
import { PostFn } from "../../Hooks/Post";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  expireDate: Yup.date().required("Expiration date is required"),
  duration: Yup.number()
    .required("Duration is required")
    .min(1, "Duration must be at least 1"),
  questions: Yup.array().of(
    Yup.object().shape({
      questionText: Yup.string().required("Question is required"),
      options: Yup.array().of(Yup.string().required("Option is required")),
      correctAnswer: Yup.string().required("Correct answer is required"),
    })
  ),
});

const initialValues = {
  title: "",
  description: "",
  expireDate: "",
  duration: 0,
  questions: [{ questionText: "", options: ["", "", ""], correctAnswer: "" }],
};

export const AddAssessments = () => {
  const params = useParams();
  const nav = useNavigate();
  const handleSubmit = async (values: any) => {
    const res = await PostFn(values, `/assessment/${params.id}`, "post");
    if (res) {
      toast.success("Assessment is created");
      nav("/dashboard");
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched }) => (
          <Form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="py-2 block text-md">
                  Title
                </label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full"
                />
                <ErrorMessage name="title" />
              </div>

              <div>
                <label htmlFor="description" className="py-2 block text-md">
                  Description
                </label>
                <Field
                  type="text"
                  id="description"
                  name="description"
                  className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full"
                />
                <ErrorMessage name="description" />
              </div>

              <div>
                <label htmlFor="expireDate" className="py-2 block text-md">
                  Expiration Date
                </label>
                <Field
                  type="date"
                  id="expireDate"
                  name="expireDate"
                  className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full"
                />
                <ErrorMessage name="expireDate" />
              </div>

              <div>
                <label htmlFor="duration" className="py-2 block text-md">
                  Duration
                </label>
                <Field
                  type="number"
                  id="duration"
                  name="duration"
                  className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full"
                />
                <ErrorMessage name="duration" />
              </div>

              <FieldArray name="questions">
                {({ push, remove }) => (
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    {values.questions.map((_, index) => (
                      <div
                        key={index}
                        className=" shadow-md shadow-gray-200 p-5 my-4 border-[1px] border-gray-200 rounded-md"
                      >
                        <label
                          htmlFor={`questions.${index}.questionText`}
                          className="py-2 block text-md"
                        >
                          Question {index + 1}
                        </label>
                        <Field
                          type="text"
                          id={`questions.${index}.questionText`}
                          name={`questions.${index}.questionText`}
                          className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full"
                        />
                        <ErrorMessage
                          name={`questions.${index}.questionText`}
                        />

                        <label
                          htmlFor={`questions.${index}.correctAnswer`}
                          className="py-2 block text-md"
                        >
                          Correct Answer
                        </label>
                        <Field
                          type="text"
                          id={`questions.${index}.correctAnswer`}
                          name={`questions.${index}.correctAnswer`}
                          className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full"
                        />
                        <ErrorMessage
                          name={`questions.${index}.correctAnswer`}
                        />

                        <FieldArray name={`questions.${index}.options`}>
                          {({ push, remove }) => (
                            <div>
                              {values.questions[index].options.map(
                                (_, optionIndex) => (
                                  <div key={optionIndex}>
                                    <label
                                      htmlFor={`questions.${index}.options.${optionIndex}`}
                                      className="py-2 block text-md"
                                    >
                                      Option {optionIndex + 1}
                                    </label>
                                    <Field
                                      type="text"
                                      id={`questions.${index}.options.${optionIndex}`}
                                      name={`questions.${index}.options.${optionIndex}`}
                                      className="px-4 border-2 py-2  border-gray-200 rounded-sm w-[80%]"
                                    />
                                    <ErrorMessage
                                      name={`questions.${index}.options.${optionIndex}`}
                                    />
                                    <Button
                                      type="button"
                                      className="rounded-3xl ml-6 mt-2"
                                      onClick={() => remove(optionIndex)}
                                      size={"icon"}
                                    >
                                      <Minus />
                                    </Button>
                                  </div>
                                )
                              )}
                              <Button
                                type="button"
                                onClick={() => push("")}
                                className="mt-4"
                              >
                                Add Option <PlusCircle className="ml-3" />
                              </Button>
                            </div>
                          )}
                        </FieldArray>

                        <Button
                          type="button"
                          onClick={() => remove(index)}
                          className="my-4 float-right"
                        >
                          Remove Question
                        </Button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() =>
                        push({
                          questionText: "",
                          options: ["", "", ""],
                          correctAnswer: "",
                        })
                      }
                    >
                      Add Question
                    </button>
                  </div>
                )}
              </FieldArray>

              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
