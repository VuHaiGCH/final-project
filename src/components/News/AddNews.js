import React, { Component } from "react";
import { createNews } from "../../action/newsAction";
import { connect } from "react-redux";
import ListNews from './ListNews';
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class AddNews extends Component {
    state = {
        title: '',
        content: '',
        downloadURL: []
    }

    handleUploadError = error => {
        console.error(error);
      };
    
      handleUploadSuccess = async filename => {
        const downloadURL = await firebase
          .storage()
          .ref("images")
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
        this.props.createNews(this.state);
        document.getElementById("addNewsForm").reset();
        console.log(this.state);
    };

    render() {
        return (
            <>
                <form
                    id="addNewsForm"
                    className="container border p-3 mt-3"
                    onSubmit={this.handleSubmit}
                >
                    <h1 className="text-center">ADD NEWS</h1>

                    <div className="form">
                        <div className="form-group col-md-5">
                            <label htmlFor="title">Title</label>
                            <input type="text" className="form-control" id="title" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-md-12">
                            <label htmlFor="content">Content</label>
                            <textarea class="form-control" id="content" rows="3" onChange={this.handleChange} required></textarea>
                        </div>

                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-6 ml-4">
                            <label htmlFor="image" style={{ marginRight: 200 }}>Image</label>
                            <FileUploader
                                accept="image/*"
                                name="image-uploader-multiple"
                                randomizeFilename
                                storageRef={firebase.storage().ref("images")}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                multiple
                                style={{ marginTop: 100 }}
                            />
                        </div>

                        <div className="form-group col-md-5">
                            <img src={this.state.downloadURL} style={{ width: 300, height: 300 }} />
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
        createNews: (news) => dispatch(createNews(news)),
    };
};

export default connect(null, mapDispatchToProps)(AddNews);
