import React, { useState, useContext, useEffect } from "react";
import { withAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom';
import { LDContext } from '../Providers/LaunchDarkly/context.js'; // need to import this file
import LoginForm from '../Components/LoginForm.js';
import Card from '../Components/Card.js';
import AuthContext from "../Components/Auth/AuthContext.js";
import { User } from '../API/index.js';
import { handleAlert } from '../Utils/utils.js';
import * as CONSTANTS from '../Constants/constants.js';
import arrowIcon from '../img/arrow-icon.svg';
import cardIcon from '../img/card-icon.svg';
import pplIcon from '../img/ppl-icon.svg';
import { updateLDUser } from "../Providers/LaunchDarkly/utils.js";


function Home({ alert }) {
  const { ldClient } = useContext(LDContext);
  const { flags } = useContext(LDContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (flags.home_incentive_banner === "false") {
      return;
    }

    handleAlert({
      alert: alert,
      type: CONSTANTS.INFO,
      message: flags.home_incentive_banner,
      timeout: 20000,
    });
  }, [flags, alert]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    const apiResponse = await User.login(state);
    let userObject;

    if (apiResponse.status === 201) {
      const userId = apiResponse.data[0].id

      try {
        userObject = await User.findProfile(userId);
        userObject = await userObject.data;
      }
      catch (exception) {
        console.log(exception);
        console.log('error finding user');
      }


      auth.signin(state.username, userId, () => {
        updateLDUser(ldClient, userId, userObject);
        navigate("/accounts");
      })
    }

    handleAlert({
      response: apiResponse,
      alert: alert,
      type: CONSTANTS.SUCCESS,
      message: CONSTANTS.USER_LOGIN_SUCCESS
    });
  }

  const handleRegister = () => {
    ldClient.track('started-registration');
    navigate('/register');
  }

  return (
    <div className="min-h-screen h-full w-full bg-white-darker">
      <div className="bg-ipad-analytics bg-cover bg-no-repeat flex items-center pl-56 py-12">
        <LoginForm
          username={state.username}
          password={state.password}
          onChange={handleChange.bind(state)}
          onSubmit={handleSubmit.bind(state)}
          onRegister={handleRegister.bind(state)}
        />
      </div>
      <div className="w-full text-center">
        <span className="font-bold text-2xl relative top-4">Suggested for you</span>
        <div className="flex flex-row my-10 justify-around">
          <Card img={arrowIcon} header="Coming Soon" text="Buy/Sell/Hold Crypto" />
          <Card classOverride="!bg-orange-default" img={cardIcon} header="Limited Time Offer" text="Gold Card" />
          <Card classOverride="!bg-blue-default" img={pplIcon} header="Questions?" text="Work with an advisor." />
        </div>
      </div>
    </div>
  );
}

export default withAlert()(Home);