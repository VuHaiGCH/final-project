export const createFee = (fee) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      // const emailUser = getState().firebase.auth.email;
  
      firestore
        .collection("fee")
        .add({
          ...fee,
          // emailUser: emailUser,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_FEE_SUCCESS",
            fee,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_FEE_ERR",
            err,
          });
        });
    };
  };

  export const removeFee = (fee) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("fee")
        .doc(fee.id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_FEE",
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_FEE_ERR",
            err,
          });
        });
    };
  };