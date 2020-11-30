import React, { Component } from "react";
import { createFee } from "../../action/feeAction";
import { connect } from "react-redux";

class AddFee extends Component {
    fee = {
        name: '',
        semester: '',
        needPaid: '',
        hasPaid: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createFee(this.state);
        document.getElementById("addFeeForm").reset();
        console.log(this.state);
    };

    render() {
        return (
            <>
                <form
                    id="addFeeForm"
                    className="container border p-3 mt-3"
                    onSubmit={this.handleSubmit}
                >
                    <h1 className="text-center">ADD FEE</h1>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">ID Of Student</label>
                            <input type="text" className="form-control" id="name" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="semester">Semester</label>
                            <select class="custom-select" id="semester" onChange={this.handleChange}  required>
                                <option selected value="">Choose...</option>
                                <option>Spring 2017</option>
                                <option>Summer 2017</option>
                                <option>Fall 2017</option>
                                <option>Spring 2018</option>
                                <option>Summer 2018</option>
                                <option>Fall 2018</option>
                                <option>Spring 2019</option>
                                <option>Summer 2019</option>
                                <option>Fall 2019</option>
                                <option>Spring 2020</option>
                                <option>Summer 2020</option>
                                <option>Fall 2020</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="needPaid">Need Paid</label>
                            <input type="number" className="form-control" id="needPaid" onChange={this.handleChange} required />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="hasPaid">Has Paid</label>
                            <input type="number" className="form-control" id="hasPaid" onChange={this.handleChange} required />
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
        createFee: (fee) => dispatch(createFee(fee)),
    };
};

export default connect(null, mapDispatchToProps)(AddFee);
