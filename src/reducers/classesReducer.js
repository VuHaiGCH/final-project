import { toast } from "react-toastify";

const classesReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CLASS_SUCCESS": {
      toast.success("Added a class for student");
      return state;
    }
    case "ADD_CLASS_ERR": {
      toast.error("An error occurred");
      return state;
    }
    case "REMOVE_CLASS": {
      toast.warn("A class was removed...");
      return state;
    }
    case "REMOVE_CLASS_ERR": {
      toast.error("A class remove error occured....");
      return state;
    }
    default:
      return state;
  }
};

export default classesReducer;
