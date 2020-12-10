import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Dashboard from './components/Dashboard';
import ListStudents from './components/students/ListStudents'
import ListTeachers from './components/teachers/ListTeachers'
import AddStudents from './components/students/AddStudents'
import AddTeachers from './components/teachers/AddTeachers'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "material-icons/iconfont/material-icons.css";
import SideBar from './layout/SideBar';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ListFees from './components/fee/ListFees';
import AddFee from './components/fee/AddFee';
import AddMark from './components/mark/AddMark';
import MarkReport from './components/mark/MarkReport';
import AddNews from './components/News/AddNews';
import ListNews from './components/News/ListNews';
import ListDocuments from './components/Document/ListDocuments';
import AddDocument from './components/Document/AddDocument';
import AddnewClass from './components/Classes/AddnewClass';
import ListofClasses from './components/Classes/ListofClasses';
import EditFee from './components/fee/EditFee';
import AddNewAccount from './components/students/AddNewAccount';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="row" id="body-row">
        <div className="col-2 p-0">
          < SideBar />
        </div>

        <div className="col-10 p-3">
      <Switch>

      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/"  exact>
        <Dashboard />
      </Route>
      <Route path="/liststudents">
        <ListStudents />
      </Route>
      <Route path="/listteachers">
        <ListTeachers />
      </Route>
      <Route path="/addstudents">
        <AddStudents />
      </Route>
      <Route path="/addteachers">
        <AddTeachers />
      </Route>
      <Route path="/listfee">
        <ListFees />
      </Route>
      <Route path="/addfee">
        <AddFee />
      </Route>
      <Route path="/mark-report">
        <MarkReport />
      </Route>
      <Route path="/add-mark">
        <AddMark />
      </Route>
      <Route path="/add-news">
        <AddNews />
      </Route>
      <Route path="/list-news">
        <ListNews />
      </Route>
      <Route path="/list-documents">
        <ListDocuments />
      </Route>
      <Route path="/add-document">
        <AddDocument />
      </Route>
      <Route path="/add-class">
        <AddnewClass />
      </Route>
      <Route path="/list-classes">
        <ListofClasses />
      </Route>
        
      <Route path="/edit-fee/:id">
        <EditFee />
      </Route>

      <Route path="/add-account">
        <AddNewAccount />
      </Route>

    </Switch>
    </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
