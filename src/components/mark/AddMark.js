import React, { Component } from "react";
import { createMark } from "../../action/markAction";
import { connect } from "react-redux";

class AddMark extends Component {
    mark = {
        id: '',
        course: '',
        class: '',
        mark: {
          onlineTest: '',
          quiz: '',
          report: '',
          average: ''
        },
        status: ''
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createMark(this.state);
        document.getElementById("addMarkForm").reset();
        console.log(this.state);
    };

    render() {
        return (
            <>
                <form
                    id="addMarkForm"
                    className="container border p-3 mt-3"
                    onSubmit={this.handleSubmit}
                >
                    <h1 className="text-center">ADD MARK</h1>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="id">ID of Student</label>
                            <input type="text" className="form-control" id="id" onChange={this.handleChange} required />
                        </div>
                        
                        <div className="form-group col-md-4">
                            <label htmlFor="displayName">Name of Student</label>
                            <input type="text" className="form-control" id="displayName" onChange={this.handleChange} required />
                        </div>

                    </div>
                    <div className="form-row">
                        
                        <div className="form-group col-md-4">
                            <label htmlFor="course">Name of Course</label>
                            <input type="text" className="form-control" id="course" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="course">Class</label>
                            <input type="text" className="form-control" id="class" onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="onlineTest">Online Test</label>
                            <input type="number" className="form-control" id="onlineTest" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="quiz">Quiz</label>
                            <input type="number" className="form-control" id="quiz" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="report">Report</label>
                            <input type="number" className="form-control" id="report" onChange={this.handleChange} required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="avg">Average</label>
                            <input type="number" className="form-control" id="avg" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="status">Status</label>
                            <input type="text" className="form-control" id="status" onChange={this.handleChange} required />
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
      createMark: (mark) => dispatch(createMark(mark)),
    };
};

export default connect(null, mapDispatchToProps)(AddMark);
