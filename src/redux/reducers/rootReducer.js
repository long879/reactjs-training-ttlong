import { combineReducers } from "redux";

import studentReducer from "../Student/student.reducer";

const rootReducer = combineReducers({
  studentReducer: studentReducer,
});

export default rootReducer;
