import { toast } from "react-toastify";

const studentReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_STUDENT": {
      toast.success("Added a student");
      return state;
    }
    case "ADD_STUDENT_ERR": {
      toast.error("An error occurred");
      return state;
    }
    default:
      return state;
  }
};

export default studentReducer;
