import React, { useEffect, useState, useContext } from "react";
import ProfileForm from '../Components/ProfileForm.js';
import { handleAlert } from '../Utils/utils.js';
import { withAlert } from 'react-alert';
import { User } from '../API/index.js';
import * as CONSTANTS from '../Constants/constants.js';
import AuthContext from "../Components/Auth/AuthContext.js";
import { LDContext } from '../Providers/LaunchDarkly/context.js';
import { updateLDUser } from '../Providers/LaunchDarkly/utils.js';


function Profile({ alert }) {

  const { ldClient } = useContext(LDContext);
  const auth = useContext(AuthContext);
  /* handle async loading of components */
  const [isLoading, setLoading] = useState(true);
  const [state, setState] = useState({
    name: "",
    username: "",
    password: "",
    phonenumber: "",
    state: "Select state",
    beta: false,
    isLoading: false,
    error: null,
  });

  /* fetching initial user props, if self-registered not all data will be there */
  useEffect( () => {
    const fetchData = async () => {
      try {
        let userObject = await User.findProfile(auth.id);
        userObject = await userObject.data;
       /*  checking if beta user set or state set, eg not for newly registered */
        if (!userObject.hasOwnProperty('beta'))
          userObject.beta=false;
        if (!userObject.hasOwnProperty('state'))
          userObject.state="Select state";
                
    
        setState(userObject);
        setLoading(false);
      }
     catch (exception) {
       console.log(exception);
       console.log('error finding userID');
     }
    };

    if (auth.id !== 0) {
      fetchData();
    }
  },[auth.id]);


  const handleChange = (f) => {
    const target = f.target;
    const value = target.value;
    const id = target.id;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

   const toggleBetaCheckboxValue = (e) => {
    const beta = e.target.id;
    setState(prevState => ({
      ...prevState,
      [beta] : !prevState.beta
    }));
  };

  const submitProfile = async () => {

      const apiResponse = await User.updateProfile(state);

      updateLDUser(ldClient, auth.id, state);

      handleAlert({
        response: apiResponse,
        alert: alert,
        type: CONSTANTS.SUCCESS,
        message: CONSTANTS.PROFILE_UPDATE_SUCCESS
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-white-darker bg-cover bg-no-repeat flex justify-center items-baseline p-20">
      <ProfileForm
        userObject={state}
        toggleBetaCheckboxValue={toggleBetaCheckboxValue.bind(state)}
        onChange={handleChange.bind(state)}
        onSubmit={submitProfile.bind(state)}
        />
    </div>
  );
}

export default withAlert()(Profile);
