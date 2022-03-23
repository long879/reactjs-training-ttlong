import {
  GET_STUDENTS,
  ADD_STUDENT,
  EDIT_STUDENT,
  DELETE_STUDENT,
  SELECT_STUDENT,
} from "./student.types";

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    payload: students,
  };
};

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};

export const editStudent = (student) => {
  return {
    type: EDIT_STUDENT,
    payload: student,
  };
};

export const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    payload: student,
  };
};

export const selectStudent = (student) => {
  return {
    type: SELECT_STUDENT,
    payload: student,
  };
};
