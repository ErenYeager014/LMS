import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button } from '../../../@/components/ui/button';
import { PostFn } from '../../Hooks/Post';
import toast from 'react-hot-toast';
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
});

const initialValues = {
  title: '',
  content: '',
};

const onSubmit = async (values: any, { resetForm }: any) => {
  // Handle form submission here
  const result = await PostFn(values, "/blog", "post");
  if (result) {
    toast.success("Successfully created a new");
    resetForm();
  }
  // Assuming you will send the form data to an API or perform some other action
  // After successful submission, you might want to reset the form

};

const PostBlog = () => {
  return (
    <div className="p-4">
      <h4 className="text-2xl font-semibold my-6">Post the Blog</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className='grid grid-cols-2 place-content-center gap-4'>
              <div>
                <label htmlFor="title" className="py-2 block text-md">Title</label>
                <Field type="text" id="title" name="title" className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full" />
                <ErrorMessage name="title" component="div" className="text-red-400" />
              </div>

              <div>
                <label htmlFor="content" className="py-2 block text-md">Content</label>
                <Field as="textarea" id="content" name="content" className="px-4 border-2 py-2  border-gray-200 rounded-sm w-full" cols={3} rows={1} />
                <ErrorMessage name="content" component="div" className="text-red-400" />
              </div>

            </div>
            <Button type="submit" disabled={!formik.isValid || formik.isSubmitting} className='w-full my-4 float-right'>
              Post Blog
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostBlog;
