import React from "react";
import { connect } from "react-redux";
import {  removeClass  } from "../../action/classesAction";

const TableClasses = ({ clas, removeClass }) => {
  const handleRemove = (clas) => {
    removeClass(clas);
  };
  return (
    <>
      <tr>
        <td>{clas.classID}</td>
        <td>{clas.course}</td>
        <td>{clas.place}</td>
        <td>{clas.students.length}/30</td>
        <td>{clas.teacher}</td>
        <td>time</td>

        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(clas)}
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
    removeClass: (clas) => dispatch(removeClass(clas)),
  };
};

export default connect(null, mapDispatchToProps)(TableClasses);
