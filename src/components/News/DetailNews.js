import React from "react";
import { connect } from "react-redux";
import { removeNews } from "../../action/newsAction";

const DetailNews = ({ detail }) => {
  const handleRemove = (detail) => {
    removeNews(detail);
  };
  return (
    <>
      <tr>
        <td>{detail.title}</td>
        <td style={{wordBreak: "break-all"}}>{detail.content}</td>
        <td><img src={detail.downloadURL} style={{width:200,height:200}}/></td>
        <td>
          <span
            className="material-icons text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(detail)}
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
    removeNews: (detail) => dispatch(removeNews(detail)),
  };
};

export default connect(null, mapDispatchToProps)(DetailNews);
