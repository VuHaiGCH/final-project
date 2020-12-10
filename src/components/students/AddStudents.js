import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStudent } from '../../action/studentAction'
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import ListStudents from './ListStudents';

class AddStudents extends Component {
  state = {
    name: '',
    birth: '',
    field: '',
    course: '',
    email: '',
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
    })
    console.log(this.state)
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createStudent(this.state);
    // this.props.history.push('/addstudents');
  }
  render() {
    //   const { auth } = this.props;
    //   if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container border p-3 mt-3">
        <form className="white" onSubmit={this.handleSubmit}>
          <h1 className="text-center">Create a New Student</h1>
          <div className="form-row" id="addForm">
            <div className="form-group col-md-6">
              <label htmlFor="name">Full Name</label>
              <input type="text" className="form-control" id="name" onChange={this.handleChange} required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="birth">Birthday</label>
              <input type="date" className="form-control" id="birth" onChange={this.handleChange} min="1970-01-01" max="2020-01-01" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="course">Course</label>
              <input type="text" className="form-control" id="course" onChange={this.handleChange} required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="field">Field</label>
              <select class="custom-select" id="field" onChange={this.handleChange} required>
                <option selected value="">Choose...</option>
                <option>IT</option>
                <option>Business</option>
                <option>Design</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="displayName">Username</label>
            <input type="text" className="form-control" id="displayName" onChange={this.handleChange} required />
          </div>

          <div className="form-row">

            <div className="form-group col-md-6 ml-1">
            <label htmlFor="course" style={{marginRight:200}}>Avatar</label>
              <FileUploader
                accept="image/*"
                name="image-uploader-multiple"
                randomizeFilename
                storageRef={firebase.storage().ref("images")}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                multiple
                style={{marginTop:100}}
              />
            </div>

            <div className="form-group col-md-5">
              <img src={this.state.downloadURL} style={{width:300, height:300}}/>
            </div>
          </div>
          <div className="input-field">
            <button className="btn btn-primary w-100">Submit</button>
          </div>
        </form>
      </div>

      
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    createStudent: (student) => dispatch(createStudent(student))
  }
}

export default connect(null, mapDispatchToProps)(AddStudents);




