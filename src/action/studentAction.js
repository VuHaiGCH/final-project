export const createStudent = (student) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid

    firestore
      .collection("students")
      .add({
        ...student,
        // authorId: authorId,
        date: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_SUCCESS",
          student,
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