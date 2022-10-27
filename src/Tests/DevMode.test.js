import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from '../Components/Auth/AuthProvider.js';
import buildMockLDProvider from "../Providers/LaunchDarkly/mock.js";
import Devs from '../Pages/Dev';
import Nav from '../Components/Nav/Nav.js';
import { mount } from 'enzyme';
import AlertTemplate from '../Components/AlertTemplate.js';


describe('<Dev/> Page', () => {
  const testUser = "test@test.com"
  const MockLDProvider = buildMockLDProvider({ "user_role": "Developer" });

  const wrapper = mount(
    <MockLDProvider>
      <AuthProvider defaultUser={testUser}>
        <AlertProvider template={AlertTemplate}>
          <Router>
            <Nav/>
            <Devs/>
          </Router>
        </AlertProvider>
      </AuthProvider>
    </MockLDProvider>
  );

  it('renders the Nav component', () => {
    expect(wrapper.find(Nav)).toHaveLength(1);
  });

  it('renders the Nav message for a logged in user', () => {
    const loggedInText = wrapper.find('.logged-in-text');

    expect(loggedInText.text()).toBe(`Welcome, ${testUser}`);
  });

  it('renders the DevMode link if Dev enabled', () => {
    const devModeLink = wrapper.find('a[href="/dev"]');

    expect(devModeLink.text()).toBe(`Dev`);
  });
});
