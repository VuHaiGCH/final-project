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
          type: "ADD_STUDENT",
          student,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_STUDENT_ERR",
          err,
        });
      });
  };
};

export const removeStudent = (student) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore
      .collection("students")
      .doc(student.id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_STUDENT",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_STUDENT_ERR",
          err,
        });
      });
  };
};