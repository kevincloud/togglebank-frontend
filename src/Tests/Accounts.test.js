import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from '../Components/Auth/AuthProvider.js';
import buildMockLDProvider from "../Providers/LaunchDarkly/mock.js";
import Accounts from '../Pages/Accounts';
import Nav from '../Components/Nav/Nav.js';
import AccountPanelList from '../Components/AccountPanelList';
import ActionList from '../Components/ActionList';
import { mount } from 'enzyme';
import ActionListItem from '../Components/ActionListItem.js';
import Button from '../Components/Button.js';

describe('<Accounts/> Component', () => {
  const testUser = "test@test.com"
  const MockLDProvider = buildMockLDProvider({ "show_cryptocurrency_page": false });

  const wrapper = mount(
    <MockLDProvider>
      <AuthProvider defaultUser={testUser}>
        <Router>
          <Nav/>
          <Accounts/>
        </Router>
      </AuthProvider>
    </MockLDProvider>
  );

  it('renders the Nav component', () => {
    expect(wrapper.find(Nav)).toHaveLength(1);
  });

  // This should probably go in the Nav test suite once we write it
  it('renders the Nav message for a logged in user', () => {
    const loggedInText = wrapper.find('.logged-in-text');

    expect(loggedInText.text()).toBe(`Welcome, ${testUser}`);
  });

  it('does not render the Crypto link if crypto not enabled', () => {
    const cryptoListElement = wrapper.find('a[href="/crypto"]').closest('li');

    expect(cryptoListElement.hasClass('hidden')).toBe(true);
  });

  // Ditto
  it('renders a signout button', () => {
    const navWrapper = wrapper.find(Nav);
    expect(navWrapper.find(Button)).toHaveLength(1);
  });

  it('renders an AccountPanelList component', () => {
    expect(wrapper.find(AccountPanelList)).toHaveLength(1);
  })

  it('renders an ActionList component', () => {
    expect(wrapper.find(ActionList)).toHaveLength(1);
  });

  it('renders 3 ActionListItem components', () => {
    expect(wrapper.find(ActionListItem)).toHaveLength(3);
  });
});
