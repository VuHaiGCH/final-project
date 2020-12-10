import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import SideBar from '../layout/SideBar';

const Dashboard = ({ students }) => {
    

    return (
        
        <div className="container-fluid p-0">

            <h1 id="title-dashboard">Dashboard</h1>

            <div className="row mt-3 mb-4" id="card-dashboard">
                <div className="col-3">
                    <div className="border border-success bg-success w-100">
                        <div className="text-white p-2">
                            <div className="row">
                                <div className="col-2 ml-2 mt-2">
                                    <i className="fa fa-file-text fa-4x"></i>
                                </div>
                                <div className="col-9 text-right">
                                    <div className='h1'>12</div>
                                    <div className="h4">Students</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="border border-primary bg-primary w-100">
                        <div className="text-white p-2">
                            <div className="row">
                                <div className="col-2 ml-2 mt-2">
                                    <i className="fa fa-comments fa-4x"></i>
                                </div>
                                <div className="col-9 text-right">
                                    <div className='h1'>23</div>
                                    <div className="h4">Teachers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-3">
                    <div className="border border-warning bg-warning w-100">
                        <div className="text-white p-2">
                            <div className="row">
                                <div className="col-2 ml-2 mt-2">
                                    <i className="fa fa-user fa-4x"></i>
                                </div>
                                <div className="col-9 text-right">
                                    <div className='h1'>23</div>
                                    <div className="h4">Classes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="border border-info bg-info w-100">
                        <div className="text-white p-2">
                            <div className="row">
                                <div className="col-2 ml-2 mt-2">
                                    <i className="fa fa-list fa-4x"></i>
                                </div>
                                <div className="col-9 text-right">
                                    <div className='h1'>13</div>
                                    <div className="h4">New Stundents</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1>Feedback</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Teacher</th>
                        <th scope="col">Stars</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mr Adam</td>
                        <td>3*</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mr Jacob</td>
                        <td>4*</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mrs Larry</td>
                        <td>4*</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = (state) => {
    const students = state.firestore.ordered.students;
    // const teachers = state.firestore.ordered.teachers;
    // const classes = state.firestore.ordered.classes;

    console.log(state);

    return {
      students: students,
    //   teachers: teachers,
    //   classes: classes,
      
    };
  };
  export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
      {
        collection: "students",
        // collection: "teachers",
        // collection: "classes"
      },
    ])
  )(Dashboard);
  
