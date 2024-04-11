import { useFormik } from "formik";
interface props {
  initialvalues: {};
  validation: any;
  children: React.ReactNode;
}
export const FormikWrapper: React.FC<props> = ({
  initialvalues,
  validation,
  children,
}) => {
  const formik = useFormik({
    initialValues: initialvalues,
    validationSchema: validation,
    onSubmit: async () => {},
  });
  return <form onSubmit={formik.handleSubmit}>{children}</form>;
};
