import { GET_CATEGORIES, GET_CASE_STUDIES } from "../actions/types";
import { get_case_studies } from "../actions/work";

const initial_state = {
  categories: [],
  case_studies: [],
};

export default function (state = initial_state, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    case get_case_studies:
      return {
        ...state,
        case_studies: payload,
      };

    default:
      return state;
  }
}
