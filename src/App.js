
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NavBar from './components/Home/NavBar/NavBar';
import Login from './components/Login/Login/Login';
import Service from './components/Service/Service/Service';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddServiceFrom from './components/Service/AddServiceFrom/AddServiceFrom';
import ManageService from './components/Dashboard/ManageService/ManageService';
import OurStaffFrom from './components/Dashboard/OurStaffFrom/OurStaffFrom';
import ManageStaff from './components/Dashboard/ManageStaff/ManageStaff';
import Review from './components/Home/Review/Review';
import BookService from './components/BookService/BookService';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Orders from './components/Dashboard/Orders/Orders';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import UserOrder from './components/Dashboard/UserOrder/UserOrder';

export const UserContext=createContext();

function App() {
  const  [loggedInUser, setLoggedInUser]=useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/home'><Home></Home></Route>
          <Route exact path='/'><Home></Home></Route>
          <Route path='/login'><Login></Login></Route>
          <Route path='/service'><Service></Service></Route>
          <Route path='/orderList'><Orders></Orders></Route>
          <Route path='/yourList'><UserOrder></UserOrder></Route>
          <PrivateRoute path='/dashboard'><Dashboard></Dashboard></PrivateRoute>
          <PrivateRoute path='/makeAdmin'><MakeAdmin></MakeAdmin></PrivateRoute>
          <PrivateRoute path='/review'><Review></Review></PrivateRoute>
          <PrivateRoute path='/services/:serviceId'><BookService></BookService></PrivateRoute>
          <Route path='/addService'><AddServiceFrom></AddServiceFrom></Route>
          <Route path='/mangeStaff'><OurStaffFrom></OurStaffFrom></Route>
          <Route path='/mangeService'><ManageService></ManageService></Route>
          <Route path='/controlStaff'><ManageStaff></ManageStaff></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
