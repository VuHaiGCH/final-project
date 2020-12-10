import { toast } from "react-toastify";

  const authReducer = (state = {}, action) => {
    switch(action.type){
      case 'LOGIN_ERROR':{
        toast.success("Login failed");
        return state;
      }
  
      case 'LOGIN_SUCCESS':{
        toast.success("Login success");
        return state;
      }
  
      case 'SIGNOUT_SUCCESS':{
        toast.success("Sign out success");
        return state;
      }
  
      case 'SIGNUP_SUCCESS':{
        toast.success("Sign up success");
        return state;
      }
  
      case 'SIGNUP_ERROR':
        {
          toast.success("Sign out success");
          return {
            ...state,
            authError: action.err.message
          }
        }
  
      default:
        return state
    }
  };
  
  export default authReducer;