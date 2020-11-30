import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import TableClasses from "./TableClasses"

const ListStudents = ({ classes }) => {
  return (

    <div className="container-fluid p-2">
      <h1 className="text-center mb-5">List of Classes</h1>

      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Class ID</th>
            <th scope="col">Course</th>
            <th scope="col">Place</th>
            <th scope="col">Number of Students</th>
            <th scope="col">Teacher</th>
            <th scope="col">Time</th>
            <th scope="col">Option</th>
          </tr>
        </thead>

        <tbody>
          {classes && classes.map((clas) => <TableClasses clas={clas} key={clas.id} />)}
        </tbody>
      </table>
    </div>

  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const classes = state.firestore.ordered.classes;
  return {
    classes: classes,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "classes"
    },
  ])
)(ListStudents);

