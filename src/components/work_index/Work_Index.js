import React from "react";
import Work_Item from "../work_item/Work_Item";
import { useSelector } from "react-redux";

function Work_Index() {
  const { case_studies } = useSelector((state) => state.work);

  // https://stackoverflow.com/a/42393106
  // Create array of N elements, where N is the number of rows needed
  const rows = [...Array(Math.ceil(case_studies.length / 2))];
  // Chunk the case studies into the array of rows
  const case_study_rows = rows.map((row, i) =>
    case_studies.slice(i * 2, i * 2 + 2)
  );

  const render_case_studies = case_study_rows.map((case_study_row, i) => (
    <div className="row" key={i}>
      {case_study_row.map((case_study) => {
        return <Work_Item key={case_study.id} case_study={case_study} />;
      })}
    </div>
  ));

  return (
    <div className="row">
      <div className="col m10 offset-m1">
        <div>{render_case_studies}</div>
      </div>
    </div>
  );
}

export default Work_Index;
