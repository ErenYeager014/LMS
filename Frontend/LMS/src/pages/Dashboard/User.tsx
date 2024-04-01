import TableComponent from "../../components/Table/TableComponent";
import useFetch from "../../Hooks/useFetch";
import { userHeader } from "../../utils/Table/User";

const User = () => {
  const { isloading, iserror, data } = useFetch("users");
  if (isloading) {
    return <>loading...</>;
  }
  if (iserror) {
    return <>Something went wrong</>;
  }

  return (
    <>
      {data.data && (
        <TableComponent
          header={userHeader}
          data={data.data}
          isPagination={false}
          isSearchable={true}
          isSortable={true}
          title="Users"
        />
      )}
    </>
  );
};

export default User;
