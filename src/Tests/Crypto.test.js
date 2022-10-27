import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from '../Components/Auth/AuthProvider.js';
import buildMockLDProvider from "../Providers/LaunchDarkly/mock.js";
import Crypto from '../Pages/Crypto';
import Nav from '../Components/Nav/Nav.js';
import { mount } from 'enzyme';

describe('<Crypto/> Page', () => {
  const testUser = "test@test.com"
  const MockLDProvider = buildMockLDProvider({ "show_cryptocurrency_page": true });

  const wrapper = mount(
    <MockLDProvider>
      <AuthProvider defaultUser={testUser}>
        <Router>
          <Nav/>
          <Crypto/>
        </Router>
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

  it('renders the Crypto link if crypto enabled', () => {
    const cryptoLink = wrapper.find('a[href="/crypto"]');

    expect(cryptoLink.text()).toBe(`Crypto`);
  });
});
