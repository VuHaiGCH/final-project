export const createDocument = (doc) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      // const authorId = getState().firebase.auth.uid
  
      firestore
        .collection("document")
        .add({
          ...doc,
          // authorId: authorId,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_DOCUMENT_SUCCESS",
            doc,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_DOCUMENT_ERR",
            err,
          });
        });
    };
  };

  export const removeDocument = (doc) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("document")
        .doc(doc.id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_DOCUMENT",
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_DOCUMENT_ERR",
            err,
          });
        });
    };
  };