import { toast } from "react-toastify";

const teacherReducer = (state = {}, action) => {
    switch (action.type) {
      case 'ADD_SUCCESS':
        toast.success("Added a teacher");
        return state;
      case 'ADD_ERROR':
        toast.error("An error occurred");
        return state;
      default:
        return state;
    }
  };

export default teacherReducer