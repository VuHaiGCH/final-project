import React from "react";
import ListTeacher from "./ListTeacher";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const ListTeachers = ({ teachers }) => {
  return (

    <div className="container-fluid p-2">
      <h1 id="title-dashboard" className="mb-4">List of Teachers</h1>

      <table className="table table-striped text-center">
        <thead>
          <tr className="text-info">
            <th scope="col">Name</th>
            <th scope="col">Field</th>
            <th scope="col">Email</th>
            <th scope="col">Birth</th>
            <th scope="col">Rate</th>
          </tr>
        </thead>
        <tbody>
          {teachers && teachers.map((teacher) => <ListTeacher teacher={teacher} key={teacher.id} />)}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const teachers = state.firestore.ordered.teachers;
  return {
    teachers: teachers,
    // uid: state.firebase.auth.uid
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
        collection: "teachers"
    },
  ])
)(ListTeachers);
