import React from "react";
import ListFee from "./ListFee";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ListFees = ({ fees }) => {
  return (
    <>
    <h1 className="text-center">List of Fee</h1>
      <table
        className="table container text-center"
        style={{ marginTop: "30px" }}
      >
        <thead>
          <tr className="text-dark">
            <th scope="col">ID Of Student</th>
            <th scope="col">Semester</th>
            <th scope="col">Need Paid</th>
            <th scope="col">Has Paid</th>
          </tr>
        </thead>
        <tbody>
          {fees && fees.map((fee) => <ListFee fee={fee} key={fee.id} />)}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const fees = state.firestore.ordered.fee;
  return {
    fees: fees,
    // uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "fee"
    },
  ])
)(ListFees);
