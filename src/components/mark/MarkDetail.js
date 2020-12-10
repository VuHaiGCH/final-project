import React from "react";
import { connect } from "react-redux";
import { removeMark } from "../../action/markAction";

const MarkDetail = ({ mark }) => {
  const handleRemove = (mark) => {
    removeMark(mark);
  };
  return (
    <>
      <tr>
        <td>{mark.id}</td>
        <td>{mark.displayName}</td>
        <td>{mark.class}</td>
        <td>{mark.course}</td>
        <td>{mark.onlineTest}</td>
        <td>{mark.quiz}</td>
        <td>{mark.report}</td>
        <td>{mark.avg}</td>
        <td>{mark.status}</td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(mark)}
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
    removeMark: (mark) => dispatch(removeMark(mark)),
  };
};

export default connect(null, mapDispatchToProps)(MarkDetail);
