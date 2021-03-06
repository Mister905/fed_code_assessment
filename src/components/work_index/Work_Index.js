import React from "react";
import Work_Item from "../work_item/Work_Item";
import { useSelector } from "react-redux";
import Preloader from "../preloader/Preloader";

function Work_Index() {
  const { case_studies } = useSelector((state) => state.work);

  const { loading_case_studies } = useSelector((state) => state.work);

  // https://stackoverflow.com/a/42393106
  // Create array of N elements, where N is the number of rows needed
  const rows = [...Array(Math.ceil(case_studies.length / 2))];
  // Chunk the case studies into the array of rows
  const case_study_rows = rows.map((row, i) =>
    case_studies.slice(i * 2, i * 2 + 2)
  );

  function render_case_studies() {
    if (case_studies.length > 0) {
      return case_study_rows.map((case_study_row, i) => {
        return (
          <div className="row" key={i}>
            {case_study_row.map((case_study) => {
              return <Work_Item key={case_study.id} case_study={case_study} />;
            })}
          </div>
        );
      });
    } else {
      return (
        <div className="row">
          <div className="col m12">Not Available</div>
        </div>
      );
    }
  }

  return (
    <div>
      {loading_case_studies ? (
        <div className="row">
          <div className="col s12 m12 center-align">
            <Preloader />
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col m10 offset-m1">{render_case_studies()}</div>
        </div>
      )}
    </div>
  );
}

export default Work_Index;
