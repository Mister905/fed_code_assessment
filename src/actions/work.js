import { GET_CATEGORIES, GET_CASE_STUDIES } from "./types";

import axios from "axios";

export const get_categories = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://plankdesign.com/wp-json/plank/v1/fed-test/categories"
    );
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const get_case_studies = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://plankdesign.com/wp-json/plank/v1/fed-test/case-studies"
    );
    dispatch({
      type: GET_CASE_STUDIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
