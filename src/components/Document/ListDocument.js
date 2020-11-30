import React from "react";
import { connect } from "react-redux";
import { removeDocument } from "../../action/documentAction";

const ListDocument = ({ doc, removeDocument }) => {
  const handleDocument = (doc) => {
    removeDocument(doc);
  };
  return (
    <>
      <tr>
        <td>{doc.title}</td>
        <td>{doc.downloadURL}</td>

        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleDocument(doc)}
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
    removeDocument: (doc) => dispatch(removeDocument(doc)),
    // toggleChecked: (task) => dispatch(toggleChecked(task)),
  };
};

export default connect(null, mapDispatchToProps)(ListDocument);
