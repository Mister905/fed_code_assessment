import React, { useEffect } from "react";

// Components
import Work_Header from "./components/work_header/Work_Header";
import Work_Index from "./components/work_index/Work_Index";
import Work_Footer from "./components/work_footer/Work_Footer";
import { useDispatch } from "react-redux";
import { get_categories, get_case_studies } from "./actions/work";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_categories());
    dispatch(get_case_studies());
  }, [dispatch]);

  return (
    <div className="App">
      <Work_Header />
      <Work_Index />
      <Work_Footer />
    </div>
  );
}

export default App;
