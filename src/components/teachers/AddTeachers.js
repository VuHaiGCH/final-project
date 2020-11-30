import React, { Component } from "react";
import { createTeacher } from "../../action/teacherAction";
import { connect } from "react-redux";

class AddTeachers extends Component {
    state = {
        name: '',
        field: '',
        email: '',
        birth: '',
        rate: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTeacher(this.state);
        document.getElementById("addTeacherForm").reset();
        console.log(this.state);
    };

    render() {
        return (
            <>
                <form
                    id="addTeacherForm"
                    className="container border p-3 mt-3"
                    onSubmit={this.handleSubmit}
                >
                    <h1 className="text-center">Create a New Teacher</h1>

                    <div className="form-row" id="addForm">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" id="name" onChange={this.handleChange} required />
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
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="birth">Birth</label>
                            <input type="date" className="form-control" id="birth" onChange={this.handleChange} min="1970-01-01" max="2020-01-01" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rate">Rate</label>
                        <input type="number" className="form-control" id="rate" onChange={this.handleChange} required />
                    </div>
                    <button className="btn btn-primary w-100">Submit</button>
                </form>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTeacher: (teacher) => dispatch(createTeacher(teacher)),
    };
};

export default connect(null, mapDispatchToProps)(AddTeachers);
