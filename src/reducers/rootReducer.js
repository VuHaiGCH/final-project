import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from './authReducer'
import studentReducer from './studentReducer'
import teacherReducer from './teacherReducer'
import feeReducer from './feeReducer'
import markReducer from './markReducer'
import newsReducer from "./newsReducer";
import documentReducer from "./documentReducer";
import classesReducer from "./classesReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  student: studentReducer,
  teacher: teacherReducer,
  fee: feeReducer,
  mark: markReducer,
  news: newsReducer,
  document: documentReducer,
  classes: classesReducer
});

export default rootReducer;
