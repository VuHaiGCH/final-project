import { toast } from "react-toastify";

const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_NEWS_SUCCESS": {
      toast.success("Added a news");
      return state;
    }
    case "ADD_NEWS_ERR": {
      toast.error("An error occurred");
      return state;
    }
    case "REMOVE_NEWS": {
      toast.warn("A news was removed...");
      return state;
    }
    case "REMOVE_NEWS_ERR": {
      toast.error("A news remove error occured....");
      return state;
    }
    default:
      return state;
  }
};

export default newsReducer;
