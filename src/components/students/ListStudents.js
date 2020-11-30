import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";
import ListStudent from "./ListStudent"

const ListStudents = ({ students }) => {
  return (

    <div className="container-fluid p-2">
      <h1 className="text-center mb-5">List of Students</h1>

      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Birthday</th>
            <th scope="col">Course</th>
            <th scope="col">Field</th>
            <th scope="col">Email</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>

        <tbody>
          {students && students.map((student) => <ListStudent student={student} key={student.id} />)}
        </tbody>
      </table>
    </div>

  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const students = state.firestore.ordered.students;
  return {
    students: students,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "students"
    },
  ])
)(ListStudents);

