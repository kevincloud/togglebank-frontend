import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from '../Components/AlertTemplate.js';
import buildMockLDProvider from "../Providers/LaunchDarkly/mock.js";
import App from '../App.js';
import { mount } from 'enzyme';

describe('<App/>', () => {
  const MockLDProvider = buildMockLDProvider({ "enable-mock-feature": true });

  const wrapper = mount(
    <MockLDProvider>
      <AlertProvider template={AlertTemplate}>
        <App/>
      </AlertProvider>
    </MockLDProvider>
  );

  it('renders Home page upon app load', () => {
    let welcomeText = wrapper.find('.welcome-home-text');
    expect(welcomeText.text()).toBe("Welcome!");
  });
});
