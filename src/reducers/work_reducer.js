import {
  GET_CATEGORIES,
  GET_CASE_STUDIES,
  UPDATE_SELECTED_FILTER,
  FILTER_CASE_STUDIES,
} from "../actions/types";

const initial_state = {
  loading_categories: true,
  loading_case_studies: true,
  categories: [{ title: "All", slug: "all" }],
  case_studies: [],
  selected_category_filter: "All",
};

export default function (state = initial_state, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      let { categories: async_categories } = payload;

      return {
        ...state,
        categories: state.categories.concat(async_categories),
        loading_categories: false,
      };

    case GET_CASE_STUDIES:
      let { "case-studies": case_studies } = payload;
      return {
        ...state,
        case_studies: case_studies,
        loading_case_studies: false,
      };

    case UPDATE_SELECTED_FILTER:
      return {
        ...state,
        selected_category_filter: payload,
        loading_case_studies: true,
      };

    case FILTER_CASE_STUDIES:
      let { "case-studies": filtered_case_studies } = payload;

      if (state.selected_category_filter !== "All") {
        return {
          ...state,
          case_studies: filtered_case_studies.filter(
            (case_study) =>
              case_study.categories[0].title === state.selected_category_filter
          ),
          loading_case_studies: false,
        };
      } else {
        return {
          ...state,
          case_studies: filtered_case_studies,
          loading_case_studies: false,
        };
      }

    default:
      return state;
  }
}
