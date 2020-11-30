import { toast } from "react-toastify";

const markReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_MARK_SUCCESS": {
      toast.success("Added a mark for student");
      return state;
    }
    case "ADD_MARK_ERR": {
      toast.error("An error occurred");
      return state;
    }
    case "REMOVE_MARK": {
      toast.warn("A mark was removed...");
      return state;
    }
    case "REMOVE_MARK_ERR": {
      toast.error("A mark remove error occured....");
      return state;
    }
    default:
      return state;
  }
};

export default markReducer;
