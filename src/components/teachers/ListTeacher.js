import React from "react";
import moment from "moment";
import { connect } from "react-redux";

const ListTeacher = ({ teacher }) => {

  return (
    <>
      <tr>
        <td>{teacher.name}</td>
        <td>{teacher.field}</td>
        <td>{teacher.email}</td>
        <td>{(teacher.birth)}</td>
        <td>{teacher.rate}</td>
      </tr>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // removeTask: (task) => dispatch(removeTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(ListTeacher);
