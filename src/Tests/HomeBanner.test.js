import React from 'react';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from '../Components/AlertTemplate.js';
import { BrowserRouter as Router } from "react-router-dom";
import buildMockLDProvider from "../Providers/LaunchDarkly/mock.js";
import Home from '../Pages/Home.js';
import { mount } from 'enzyme';

describe('<Alert/> Component', () => {
  let bitcoinIncentiveText = "Sign up now for a free $100 in Bitcoin!";
  let advisorIncentiveText = "Sign up now for a free consultation with an investment advisor!";
  let noIncentiveText = "false";

  function getWrapper(incentiveText) {
    const MockLDProvider = buildMockLDProvider({ home_incentive_banner: incentiveText });

    return mount(
      <MockLDProvider>
        <AlertProvider template={AlertTemplate}>
          <Router>
            <Home/>
          </Router>
        </AlertProvider>
      </MockLDProvider>
    )
  }

  describe('with bitcoin incentive', () => {
    const wrapper = getWrapper(bitcoinIncentiveText);

    it('has the banner with the Bitcoin incentive', () => {
      let bannerMessage = wrapper.find('span#banner-message');
      expect(bannerMessage.text()).toBe(bitcoinIncentiveText);
    });
  });

  describe('with advisor incentive', () => {
    const wrapper = getWrapper(advisorIncentiveText);

    it('has the banner with the advisor incentive', () => {
      let bannerMessage = wrapper.find('span#banner-message');
      expect(bannerMessage.text()).toBe(advisorIncentiveText);
    });
  });

  describe('with no incentive', () => {
    const wrapper = getWrapper(noIncentiveText);

    it('has no incentive banner', () => {
      let bannerMessage = wrapper.find('span#banner-message');
      expect(bannerMessage).toHaveLength(0);
    });
  });
});
