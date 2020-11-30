export const createNews = (news) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      // const authorId = getState().firebase.auth.uid
  
      firestore
        .collection("news")
        .add({
          ...news,
        //   authorId: authorId,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_NEWS_SUCCESS",
            news,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_NEWS_ERR",
            err,
          });
        });
    };
  };

  export const removeNews = (detail) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("news")
        .doc(detail.id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_NEWS",
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_NEWS_ERR",
            err,
          });
        });
    };
  };