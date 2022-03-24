// Import the endpoints.
import { collegeStudentsUrl } from "../Configuration/config_url";

// Import the axios Method.
import {
  getAPICall,
  postAPICall,
  putAPICall,
  deleteAPICall,
} from "./axiosMethodCalls";

export const collegeStudentsGetData = async () => {
  try {
    const response = await getAPICall(collegeStudentsUrl);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const collegestudentsPostData = async (postedData) => {
  try {
    const response = await postAPICall(collegeStudentsUrl, postedData);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const collegestudentsPutData = async (id, postedData) => {
  try {
    const response = await putAPICall(
      `${collegeStudentsUrl}/${id}`,
      postedData
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export const collegestudentsDeleteData = async (id) => {
  try {
    const response = await deleteAPICall(`${collegeStudentsUrl}/${id}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
