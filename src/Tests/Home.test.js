import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from '../Components/AlertTemplate.js';
import { BrowserRouter as Router } from "react-router-dom";
import buildMockLDProvider from "../Providers/LaunchDarkly/mock.js";
import Home from '../Pages/Home.js';
import Card from '../Components/Card.js';
import LoginForm from '../Components/LoginForm.js';
import { mount } from 'enzyme';
import sinon from 'sinon';

describe('<Home/> Component', () => {
  const MockLDProvider = buildMockLDProvider({ "enable-mock-feature": true });

  const wrapper = mount(
    <MockLDProvider>
      <AlertProvider template={AlertTemplate}>
        <Router>
          <Home/>
        </Router>
      </AlertProvider>
    </MockLDProvider>
  );

  const email = 'featureflaggingrocks@gmail.com';
  const password = 'fakepassword';

  it('contains welcome text', () => {
    let welcomeText = wrapper.find('.welcome-home-text');
    expect(welcomeText.text()).toBe("Welcome!");
  });

  it('renders three <Card/> components', () => {
    expect(wrapper.find(Card)).toHaveLength(3);
  });

  it('allows users to type in input fields', () => {
    let usernameInput = wrapper.find('input#username');

    usernameInput.simulate('change', { target: { id: 'username', value: email } });

    let usernameValue = wrapper.find('input#username').prop('value');
    expect(usernameValue).toBe(email);
  });

  it('has a link to the register page', () => {
    let registerLink = wrapper.find("button#home-sign-up-link").at(0);

    expect(registerLink.prop('href')).toBe('/register');
  });

  it('has a link to the forgot password page', () => {
    let registerLink = wrapper.find("button#home-forgot-password-link");

    expect(registerLink.prop('href')).toBe('/forgot-password');
  });

  it('calls a function as a user clicks on register link', () => {
    let handleRegisterSpy = sinon.spy();

    const props = {
      onRegister: handleRegisterSpy,
    };

    const loginFormWrapper = mount(<LoginForm {...props}/>)
    loginFormWrapper.find("button#home-sign-up-link").simulate('click');

    expect(handleRegisterSpy.calledOnce).toBe(true);
  });

  it('calls functions as the user inputs information and submits login', () => {
    let handleSubmitSpy = sinon.spy();
    let handleChangeSpy = sinon.spy();

    const props = {
      username: email,
      password: password,
      onChange: handleChangeSpy,
      onSubmit: handleSubmitSpy
    };

    const loginFormWrapper = mount(<LoginForm {...props}/>)

    loginFormWrapper.find('input#username').simulate('change');
    loginFormWrapper.find("button[type='submit']").simulate('click');

    expect(handleChangeSpy.calledOnce).toBe(true);
    expect(handleSubmitSpy.calledOnce).toBe(true);
  });
});
