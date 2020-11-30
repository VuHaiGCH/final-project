import { toast } from "react-toastify";

const feeReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_FEE_SUCCESS": {
      toast.success("Added a fee for student");
      return state;
    }
    case "ADD_FEE_ERR": {
      toast.error("An error occurred");
      return state;
    }
    case "REMOVE_FEE": {
      toast.warn("A fee was removed...");
      return state;
    }
    case "REMOVE_FEE_ERR": {
      toast.error("A fee remove error occured....");
      return state;
    }
    default:
      return state;
  }
};

export default feeReducer;
