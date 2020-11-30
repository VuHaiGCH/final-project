import React from "react";
import DetailNews from "./DetailNews";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ListNews = ({ news }) => {
  return (
    <>
    <h1 className="text-center">List of News</h1>
      <table
        className="table container text-center"
        style={{ marginTop: "30px" }}
      >
        <thead>
          <tr className="text-dark">
            <th scope="col-3">Title</th>
            <th scope="col-7" style={{}}>Content</th>
            <th scope="col-2">Image</th>
            <th scope="col-2">Option</th>
          </tr>
        </thead>
        <tbody>
          {news && news.map((detail) => <DetailNews detail={detail} key={detail.id} />)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const news = state.firestore.ordered.news;
  return {
    news: news,
    // uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "news"
    },
  ])
)(ListNews);
