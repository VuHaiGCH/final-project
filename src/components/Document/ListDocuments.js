import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import ListDocument from "./ListDocument";

const ListDocuments = ({ docs }) => {
  return (
    <>
    <h1 className="text-center">List of Documents</h1>
      <table
        className="table container text-center"
        style={{ marginTop: "30px" }}
      >
        <thead>
          <tr className="text-dark">
            <th scope="col-3">Title</th>
            <th scope="col-2">Document</th>
            <th scope="col-2">Option</th>
          </tr>
        </thead>
        <tbody>
          {docs && docs.map((doc) => <ListDocument doc={doc} key={doc.id} />)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const docs = state.firestore.ordered.document;
  return {
    docs: docs,
    // uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "document"
    },
  ])
)(ListDocuments);
