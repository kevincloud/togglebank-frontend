import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from '../Components/AlertTemplate.js';
import { BrowserRouter as Router } from "react-router-dom";
import buildMockLDProvider from "../Providers/LaunchDarkly/mock.js";
import Register from '../Pages/Register.js';
import RegisterForm from '../Components/RegisterForm.js';

describe('<Register/> Component', () => {
  const MockLDProvider = buildMockLDProvider({ yo: true });

  const wrapper = mount(
    <MockLDProvider>
      <AlertProvider template={AlertTemplate}>
        <Router>
          <Register/>
        </Router>
      </AlertProvider>
    </MockLDProvider>
  );

  const userObject = {
    username: 'featureflaggingrocks@gmail.com',
    password: 'fakepassword',
    name: "Buzz Lightyear",
    phoneNumber: "3108553493"
  };

  it('contains welcome text', () => {
    const welcomeText = wrapper.find('.header-welcome-text');

    expect(welcomeText.text()).toBe("New User? Let's get started.");
  });

  it('renders four winputs for the register form', () => {
    expect(wrapper.find('input')).toHaveLength(4);
  });

  it('allows the user to type into the input fields', () => {
    let usernameInput = wrapper.find('input#username');

    usernameInput.simulate('change', { target: { id: 'username', value: userObject.username } });

    let usernameValue = wrapper.find('input#username').prop('value');
    expect(usernameValue).toBe(userObject.username);
  });

  it('has a link to the home page', () => {
    let registerLink = wrapper.find("button#register-sign-in-link").at(0);

    expect(registerLink.prop('href')).toBe('/');
  });

  it('calls submit function once user submits login info', () => {
    let handleSubmitSpy = sinon.spy();
    let handleChangeSpy = sinon.spy();

    const props = {
      userObject: userObject,
      onChange: handleChangeSpy,
      onSubmit: handleSubmitSpy
    };

    const registerFormWrapper = mount(<RegisterForm {...props}/>)

    registerFormWrapper.find("button[type='button']").simulate('click');

    expect(handleSubmitSpy.calledOnce).toBe(true);
  });
});
