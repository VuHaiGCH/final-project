import React from "react";
import { connect } from "react-redux";
import { removeFee } from "../../action/feeAction";

const ListFee = ({ fee, removeFee }) => {
  const handleRemove = (fee) => {
    removeFee(fee);
  };
  return (
    <>
      <tr>
        <td>{fee.name}</td>
        <td>{fee.semester}</td>
        <td>{fee.needPaid}</td>
        <td>{fee.hasPaid}</td>

        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(fee)}
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
    removeFee: (fee) => dispatch(removeFee(fee)),
  };
};

export default connect(null, mapDispatchToProps)(ListFee);
