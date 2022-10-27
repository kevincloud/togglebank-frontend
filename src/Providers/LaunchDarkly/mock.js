import React, { useState } from 'react';
import { Provider } from './context';

/**
 * Builds a LaunchDarkly mock provider for integration tests to run
 *
 * @param flags flag values to trigger certain UI states
 *
 * @return a <LDProvider> that allows us to share data to lower level components
 */
export default function buildMockLDProvider(flags) {
  const LDProvider = ({ children }) => {
    const [ldData] = useState({
      flags: flags
    });

    return <Provider value={ldData}>{children}</Provider>;
  };

  return LDProvider;
}
