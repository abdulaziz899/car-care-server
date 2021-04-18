import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider).then(function (result) {
      const { displayName, email,photoURL } = result.user;
      const signedInUser = { name: displayName, img:photoURL, email }
      setLoggedInUser(signedInUser);
      history.replace(from);
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
    return (
        <div className='container pt-5'>
            <h1 className='text-center text-capitalize text-info'>Please Login</h1>
            <div className=" mt-5  text-center">
                <button  className="btn btn-outline-success " onClick={handleGoogleSignIn}><FontAwesomeIcon className='mr-3' icon={faGoogle}></FontAwesomeIcon> Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;