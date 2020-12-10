import React from "react";
import { removeStudent } from "../../action/studentAction";
import { connect } from "react-redux";

const ListStudent = ({ student }) => {
  const handleRemove = (student) => {
    removeStudent(student);
  };
  return (
    <>
      <tr>
        <td className="align-middle">{student.name}</td>
        <td className="align-middle">{student.birth}</td>
        <td className="align-middle">{student.course}</td>
        <td className="align-middle">{student.field}</td>
        <td className="align-middle">{student.email}</td>
        <td className="align-middle">{student.displayName}</td>
        <td><img src={student.downloadURL} style={{width:200,height:200}}/></td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(student)}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeStudent: (student) => dispatch(removeStudent(student)),
  };
};

export default connect(null, mapDispatchToProps)(ListStudent);
