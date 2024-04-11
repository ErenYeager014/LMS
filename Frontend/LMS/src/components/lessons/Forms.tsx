import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../../@/components/ui/button";
import { PostFn } from "../../Hooks/Post";
import { createFormData } from "../../Helpers/FormGenerator";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
const initialValues = {
  title: "",
  content: "",
  file: null,
};

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  content: Yup.string().required("Content is required"),
  file: Yup.mixed().test(
    "fileFormat",
    "File must be a video or a PDF",
    (value: any) => {
      if (!value) return true; // If no file is uploaded, return true
      const supportedFormats = ["video/mp4", "application/pdf"]; // Define supported formats
      return supportedFormats.includes(value.type); // Check if the uploaded file's type is in supported formats
    }
  ),
});

const FileInput = ({ field, form: { setFieldValue } }) => (
  <input
    placeholder="Give the vald file"
    type="file"
    onChange={(event) => {
      setFieldValue(field.name, event.currentTarget.files[0]);
    }}
  />
);
const Forms = ({ data, isEdit }: { data?: any; isEdit: boolean }) => {
  const params = useParams();
  const onSubmit = async (values: any, { resetForm }) => {
    // Handle form submission here
    const data = createFormData(values);
    const result = isEdit
      ? await PostFn(
          {
            title: values.title,
            content: values.content,
            file: values.file,
          },
          `/lessons/${params.id}`,
          "put",
          "multipart/form-data"
        )
      : await PostFn(
          data,
          `/lesson/${params.id}`,
          "post",
          "multipart/form-data"
        );
    if (result) {
      toast.success("Lesson is created");
      resetForm();
    }
  };
  return (
    <Formik
      initialValues={(data && data) || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
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
                className="px-4 border-2 py-2  border-black rounded-sm w-full"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-400"
              />
            </div>

            <div>
              <label htmlFor="content" className="py-2 block text-md">
                Content
              </label>
              <Field
                as="textarea"
                id="content"
                name="content"
                className="px-4 border-2 py-2  border-black rounded-sm w-full"
                cols={6}
                rows={1}
              />
              <ErrorMessage
                name="content"
                component="div"
                className="text-red-400"
              />
            </div>

            <div>
              <label htmlFor="file" className="py-2 block text-md">
                Video File
              </label>
              <Field
                name="file"
                component={FileInput}
                className="px-4 border-2 py-2  border-black rounded-sm w-full"
              />
              <ErrorMessage
                name="file"
                component="div"
                className="text-red-400"
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className="my-4"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
