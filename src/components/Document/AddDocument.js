import React, { Component } from "react";
import { createDocument } from "../../action/documentAction";
import { connect } from "react-redux";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class AddDocument extends Component {
    state = {
        title: '',
        downloadURL: []
    }

    handleUploadError = error => {
        console.error(error);
      };
    
      handleUploadSuccess = async filename => {
        const downloadURL = await firebase
          .storage()
          .ref("document")
          .child(filename)
          .getDownloadURL();
    
        this.setState({
          downloadURL: downloadURL
        });
    
        console.log(this.state)
    
      };


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });

        console.log(this.state)
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createDocument(this.state);
        document.getElementById("addDocumentForm").reset();
        console.log(this.state);
    };

    render() {
        return (
            <>
                <form
                    id="addDocumentForm"
                    className="container border p-3 mt-3"
                    onSubmit={this.handleSubmit}
                >
                    <h1 className="text-center">ADD A DOCUMENT</h1>

                    <div className="form">
                        <div className="form-group col-md-5">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" onChange={this.handleChange} required />
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-6 ml-4">
                            <label htmlFor="document" style={{ marginRight: 200 }}>Document</label>
                            <FileUploader
                                accept="image/*"
                                name="image-uploader-multiple"
                                randomizeFilename
                                storageRef={firebase.storage().ref("document")}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                multiple
                            />
                        </div>
                    </div>
                    <button className="btn btn-primary w-100">Submit</button>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createDocument: (doc) => dispatch(createDocument(doc)),
    };
};

export default connect(null, mapDispatchToProps)(AddDocument);
