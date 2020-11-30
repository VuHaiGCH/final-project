import React from "react";
import { connect } from "react-redux";
// import { removeFee } from "../../action/feeAction";

const MarkDetail = ({ mark }) => {
//   const handleRemove = (fee) => {
//     removeFee(fee);
//   };
  return (
    <>
      <tr>
        <td>{mark.id}</td>
        <td>{mark.class}</td>
        <td>{mark.course}</td>
        <td>{mark.onlineTest}</td>
        <td>{mark.quiz}</td>
        <td>{mark.report}</td>
        <td>{mark.avg}</td>
        <td>{mark.status}</td>
        {/* <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(fee)}
          >
            delete
          </span>
        </td> */}
      </tr>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // removeFee: (fee) => dispatch(removeFee(fee)),
    // toggleChecked: (task) => dispatch(toggleChecked(task)),
  };
};

export default connect(null, mapDispatchToProps)(MarkDetail);
