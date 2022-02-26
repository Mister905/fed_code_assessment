import { GET_CATEGORIES, GET_CASE_STUDIES } from "../actions/types";

const initial_state = {
  loading_categories: true,
  loading_case_studies: true,
  categories: [],
  case_studies: [],
};

export default function (state = initial_state, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      let { categories } = payload;

      return {
        ...state,
        categories,
        loading_categories: false,
      };

    case GET_CASE_STUDIES:
      let { "case-studies": case_studies } = payload;
      return {
        ...state,
        case_studies: case_studies,
        loading_case_studies: false,
      };

    default:
      return state;
  }
}
