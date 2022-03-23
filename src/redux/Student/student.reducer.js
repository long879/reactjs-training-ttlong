import {
  GET_STUDENTS,
  ADD_STUDENT,
  EDIT_STUDENT,
  DELETE_STUDENT,
  SELECT_STUDENT,
} from "./student.types";

const INITIAL_STATE = {
  students: [],
  loading: true,
};

const studentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
        loading: false,
      };

    case EDIT_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.key === action.payload.key ? action.payload : student
        ),
        loading: false,
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.key !== action.payload.key
        ),
        loading: false,
      };

    case SELECT_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.key === action.payload.key ? action.payload : student
        ),
        loading: false,
      };

    default:
      return state;
  }
};

export default studentReducer;
