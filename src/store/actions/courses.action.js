import { GET_LIST_COURSES } from "../constants/courses.const";

export const getListCourses = (courses) => {
  return {
    type: GET_LIST_COURSES,
    payload: courses,
  };
};
