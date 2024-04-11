import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Loading from "../../components/Loading";
import Forms from "../../components/lessons/Forms";

const AddLesson = () => {
  const location = useLocation().pathname;
  const isEdit = location.includes("edit");
  const params = useParams();
  const { isloading, iserror, data } = useFetch(`/lessons/${params.id}`);
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
      <h2>Add Lessons</h2>
      {isEdit ? (
        <>{data && <Forms isEdit={isEdit} data={data} />}</>
      ) : (
        <Forms isEdit={isEdit} />
      )}
    </div>
  );
};

export default AddLesson;
