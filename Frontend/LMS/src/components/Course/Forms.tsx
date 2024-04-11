import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "../../../@/components/ui/button";
import { PostFn } from "../../Hooks/Post";
import toast from "react-hot-toast";
import { createFormData } from "../../Helpers/FormGenerator";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
const initialValues = {
  title: "",
  description: "",
  tags: [],
  thumbnail: "",
};
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  tags: Yup.array().min(2, "At least two tag is required"),
  thumbnail: Yup.mixed()
    .required("Thumbnail image is required")
    .test("fileType", "Unsupported file type", (value: any) => {
      if (value) {
        return ["image/jpeg", "image/png"].includes(value.type);
      }
      return true;
    }),
});
const Forms = ({ isEdit, data }: { isEdit: boolean; data?: any }) => {
  const availableTags = ["science", "music", "tech"];

  const params = useParams();
  const handleSubmit = async (values: any) => {
    try {
      const data = createFormData(values);
      const upload = isEdit
        ? await PostFn(
            data,
            `/course/${params.id}`,
            "put",
            "multipart/form-data"
          )
        : await PostFn(data, "/course", "post", "multipart/form-data");

      if (upload) {
        toast.success("Course is created");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Formik
      initialValues={(data && data) || initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ setFieldValue, values }) => (
        <Form className="grid grid-cols-2 my-4 gap-4">
          <div>
            <label htmlFor="title" className="py-2 block text-md">
              Title
            </label>
            <Field
              id="title"
              name="title"
              type="text"
              className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-500"
            />
          </div>

          <div>
            <label htmlFor="dexcription" className="py-2 block text-md">
              Despriction
            </label>
            <Field
              id="description"
              name="description"
              as="textarea"
              cols={3}
              rows={1}
              className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-400"
            />
          </div>
          <div>
            <label className="block py-2 text-md">Tags</label>
            {availableTags.map((tag) => (
              <label key={tag} className="flex gap-2 flex-row ">
                <Field
                  type="checkbox"
                  name="tags"
                  value={tag}
                  checked={values.tags.includes(tag)}
                />
                {tag}
              </label>
            ))}
            <ErrorMessage
              name="tags"
              component="div"
              className="text-red-400"
            />
          </div>

          <div>
            <input
              type="file"
              placeholder="Enter the thumbnail file"
              name="thumbnail"
              onChange={(e: any) => {
                setFieldValue("thumbnail", e.target.files[0]);
              }}
            />
            <ErrorMessage
              name="thumbnail"
              component="div"
              className="text-red-400"
            />
          </div>

          <Button
            type="submit"
            variant={"default"}
            className="w-[200px] grid-flow-col-dense"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
