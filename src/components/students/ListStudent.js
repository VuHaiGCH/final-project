import React from "react";
import moment from "moment";
import { connect } from "react-redux";

const ListStudent = ({ student }) => {

  return (
    <>
      <tr>
        <td className="align-middle">{student.name}</td>
        <td className="align-middle">{student.birth}</td>
        <td className="align-middle">{student.course}</td>
        <td className="align-middle">{student.field}</td>
        <td className="align-middle">{student.email}</td>
        <td><img src={student.downloadURL} style={{width:200,height:200}}/></td>
      </tr>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // removeTask: (task) => dispatch(removeTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(ListStudent);
