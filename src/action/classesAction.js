export const createClasses = (classes) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      // const emailUser = getState().firebase.auth.email;
  
      firestore
        .collection("classes")
        .add({
          ...classes,
          // emailUser: emailUser,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_CLASS_SUCCESS",
            classes,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_CLASS_ERR",
            err,
          });
        });
    };
  };

  export const removeClass = (cal) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("classes")
        .doc(cal.id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_CLASS",
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_CLASS_ERR",
            err,
          });
        });
    };
  };
