import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
 


class ProfilePage extends Component {
    state = {
        title:'',
        filenames: [],
        downloadURLs: [],
        isUploading: false,
        uploadProgress: 0
      };
     
      handleUploadStart = () =>
        this.setState({
          isUploading: true,
          uploadProgress: 0
        });
     
      handleProgress = progress =>
        this.setState({
          uploadProgress: progress
        });
     
      handleUploadError = error => {
        this.setState({
          isUploading: false
          // Todo: handle error
        });
        console.error(error);
      };
     
      handleUploadSuccess = async filename => {
        const downloadURL = await firebase
          .storage()
          .ref("images")
          .child(filename)
          .getDownloadURL();


        // firestore
        // .collection("image")
        // .add({
        //   ...student,
        //   // authorId: authorId,
        //   date: new Date(),
        // })
     
        this.setState(oldState => ({
          filenames: [...oldState.filenames, filename],
          downloadURLs: [...oldState.downloadURLs, downloadURL],
          uploadProgress: 100,
          isUploading: false,
        }
        ));
        console.log(this.state)
      };
 
  render() {
    return (
        <div>
        <FileUploader
          accept="image/*"
          name="image-uploader-multiple"
          randomizeFilename
          storageRef={firebase.storage().ref("images")}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
          multiple
        />
 
        <p>Progress: {this.state.uploadProgress}</p>
 
        <p>Filenames: {this.state.filenames.join(", ")}</p>
 
        <div>
          {this.state.downloadURLs.map((downloadURL, i) => {
            return <input type="text" className="form-control" id="course" value={downloadURL} onChange={this.handleChange} required /> ,<img key={i} src={downloadURL} />;
          })}
        </div>
      </div>
    );
  }
}
 
export default ProfilePage;