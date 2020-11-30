import React from "react";
import MarkDetail from "./MarkDetail";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const MarkReport = ({ marks }) => {
  return (
    <>
    <h1 className="text-center">List of marks</h1>
      <table
        className="table container text-center"
        style={{ marginTop: "30px" }}
      >
        <thead>
          <tr className="text-dark">
            <th scope="col">ID Of Student</th>
            <th scope="col">Class</th>
            <th scope="col">Course</th>
            <th scope="col">Online Test</th>
            <th scope="col">Quiz</th>
            <th scope="col">Report</th>
            <th scope="col">Avarage</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {marks && marks.map((mark) => <MarkDetail mark={mark} key={mark.id} />)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const marks = state.firestore.ordered.mark;
  return {
    marks: marks,
    // uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "mark"
    },
  ])
)(MarkReport);
