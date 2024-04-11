import useFetch from "../../Hooks/useFetch";
import { useLocation, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Forms from "../../components/Course/Forms";

const AddCourse = () => {
  const location = useLocation().pathname;
  const isEdit = location.includes("edit");
  const params = useParams();
  const { isloading, iserror, data } = useFetch(`/course/${params.id}`);
  if (isEdit && isloading) {
    <>
      <Loading />
    </>;
  }
  if (isEdit && iserror) {
    <>Something went Wrong</>;
  }
  console.log(data);
  return (
    <div>
      <h1 className="text-2xl font-semibold">
        {!isEdit ? "Create" : "Edit"} Post Form
      </h1>
      {isEdit ? (
        <>{data && <Forms isEdit={isEdit} data={data} />}</>
      ) : (
        <Forms isEdit={isEdit} />
      )}
    </div>
  );
};

export default AddCourse;
