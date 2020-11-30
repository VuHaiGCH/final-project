import { toast } from "react-toastify";

const documentReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_DOCUMENT_SUCCESS": {
      toast.success("Added a document for student");
      return state;
    }
    case "ADD_DOCUMENT_ERR": {
      toast.error("An error occurred");
      return state;
    }
    case "REMOVE_DOCUMENT": {
      toast.warn("A document was removed...");
      return state;
    }
    case "REMOVE_DOCUMENT_ERR": {
      toast.error("A document remove error occured....");
      return state;
    }
    default:
      return state;
  }
};

export default documentReducer;
