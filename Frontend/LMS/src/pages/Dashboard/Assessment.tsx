import { useState } from "react";
import AssessmentLayout from "../../layout/AssessmentLayout";
import { questions } from "../../utils/assessment";
import { Button } from "../../../@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import useFetch from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

const Assessment = () => {
  const parasm = useParams();
  const { iserror, isloading, data } = useFetch(`/assessment/${parasm.id}`);
  const Data = data?.data;

  if (isloading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (iserror) {
    return <>Something went Wrong</>;
  }

  return (
    <>
      {Data && (
        <AssessmentLayout
          questions={Data.questions}
          title={Data.title}
          description={Data.description}
        ></AssessmentLayout>
      )}
    </>
  );
};

export default Assessment;
