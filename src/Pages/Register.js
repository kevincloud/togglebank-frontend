import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { withAlert } from 'react-alert'
import { LDContext } from '../Providers/LaunchDarkly/context.js';
import RegisterForm from '../Components/RegisterForm.js';
import { User } from '../API/index.js';
import { handleAlert } from '../Utils/utils.js';
import * as CONSTANTS from '../Constants/constants.js';
import { checkRegisterPageLDFlag } from '../Utils/utils';

function Register({ alert }) {
  const { ldClient } = useContext(LDContext);
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    username: "",
    password: "",
    phoneNumber: "",
    state: "Select State"
  });

  const handleChange = (f) => {
    const { id, value } = f.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitRegistration = async () => {
    // Metric sent at top to allow for script automation of dummy data
    ldClient.track('registered');
    const apiResponse = await User.create(state);

    handleAlert({
      response: apiResponse,
      alert: alert,
      type: CONSTANTS.SUCCESS,
      message: CONSTANTS.USER_CREATION_SUCCESS,
      callback: navigate.bind(state, '/')
    });
  };

  const flags = useContext(LDContext);
  var showRegister = checkRegisterPageLDFlag(flags) ? "relative h-full" : "hidden";

  return (
    <div className={showRegister}>
      <div className="min-h-screen h-full w-full bg-white-darker bg-building bg-cover bg-no-repeat flex justify-center items-center">
        <RegisterForm
          userObject={state}
          onChange={handleChange.bind(state)}
          onSubmit={submitRegistration.bind(state)}
        />
      </div>
    </div>
  );
}

export default withAlert()(Register);
