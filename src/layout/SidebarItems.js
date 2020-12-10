import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../action/authAction"


const sidebarItems = ({ signOut, uid }) => {
    console.log(uid)
    if (uid) {
        return (
            <div id="sidebar-container" className="sidebar-expanded">

                <ul className="list-group">

                    
                    <Link to="/" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">Dashboard</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>

                    <Link to="/liststudents" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">Students</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>

                    <div id='submenu1' className="sidebar-submenu">
                        <Link to="/liststudents" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">List of Students</span>
                        </Link>
                        <Link to="/addstudents" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">Add New Students</span>
                        </Link>
                        <Link to="/add-account" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">Add New Account</span>
                        </Link>
                    </div>

                    {/* <Link to="/listteachers" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">Teachers</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>

                    <div id='submenu1' className="sidebar-submenu show">
                        <Link to="/listteachers" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">List of Teachers</span>
                        </Link>
                        <Link to="/addteachers" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">Add New Teachers</span>
                        </Link>
                    </div> */}

                    {/* <Link to="/liststudents" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">Classes</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>

                    <div id='submenu1' className="sidebar-submenu show">
                        <Link to="/list-classes" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">List of Classes</span>
                        </Link>
                        <Link to ="/add-class" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">Add New Classes</span>
                        </Link>
                    </div> */}

                    <Link to="/listfee" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">Fee</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>

                    <div id='submenu1' className="sidebar-submenu show">
                        <Link to="/listfee" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">List of Fees</span>
                        </Link>
                        <Link to="/addfee" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">Add Fee</span>
                        </Link>
                    </div>

                    <Link to="/mark-report" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">Mark</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>

                    <div id='submenu1' className="sidebar-submenu show">
                        <Link to="/mark-report" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">Mark Report</span>
                        </Link>
                        <Link to="/add-mark" className="list-group-item list-group-item-action bg-dark text-white">
                            <span className="menu-collapsed">Add Mark</span>
                        </Link>
                    </div>

                    <Link to="/list-news" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">News</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>


                    <div id='submenu1' className="sidebar-submenu show">
                    <Link to="/list-news" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-white">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">List of News</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>

                    <Link to="/add-news" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-white">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">Add a News</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>
                    </div>

                    <Link to="/list-news" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">Documents</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>


                    <div id='submenu1' className="sidebar-submenu show">
                    <Link to="/list-documents" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-white">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">List of Documents</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>

                    <Link to="/add-document" data-toggle="collapse" aria-expanded="false" className="list-group-item list-group-item-action bg-dark text-white">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="menu-collapsed">Add a Document</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </Link>
                    </div>

                    <Link to="/signin" className="bg-dark list-group-item list-group-item-action flex-column align-items-start" onClick={signOut}>
                        Sign Out
                    </Link>
                </ul>
            </div>
        );
    }
    else {
        return (

            <div id="sidebar-container" className="sidebar-expanded">

                <ul className="list-group">

                    <Link to="/signup" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        Sign Up
        </Link>
                    <Link to="/signin" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        Sign In
        </Link>
                </ul>
            </div>

        );
    }

};

const mapStateToProps = (state) => {
    const uid = state.firebase.auth.uid;
    return {
        uid: uid,
    };
};

const mapDistpatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(mapStateToProps, mapDistpatchToProps)(sidebarItems);
