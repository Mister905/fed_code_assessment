import React from "react";
import Work_Item from "../work_item/Work_Item";
import { useSelector } from "react-redux";

function Work_Index() {

  const { case_studies } = useSelector((state) => state.work);

  const render_case_studies = case_studies.map((case_study) => (
    <Work_Item key={case_study.id} case_study={case_study} />
  ));

  return <div>{render_case_studies}</div>;
}

export default Work_Index;
