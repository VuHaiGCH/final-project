export const createTeacher = (teacher) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      // const authorId = getState().firebase.auth.uid
  
      firestore
        .collection("teachers")
        .add({
          ...teacher,
          // authorId: authorId,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_SUCCESS",
            teacher,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_ERROR",
            err,
          });
        });
    };
  };