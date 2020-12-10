export const createMark = (mark) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      // const authorId = getState().firebase.auth.uid
  
      firestore
        .collection("mark")
        .add({
          ...mark,
          // authorId: authorId,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_MARK_SUCCESS",
            mark,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_MARK_ERR",
            err,
          });
        });
    };
  };

  export const removeMark = (mark) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("mark")
        .doc(mark.id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_MARK",
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_MARK_ERR",
            err,
          });
        });
    };
  };
