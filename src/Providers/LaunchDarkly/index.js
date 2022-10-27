import React, { useState, useEffect } from 'react';
import { Provider } from './context';
import initLDClient from './initLDClient';
import { fetchFlags, getFlattenedFlagsFromChangeset } from './utils';

/**
 * Builds a LaunchDarkly provider for the application to use feature flags
 *
 * @param config clientSideID and user context
 *
 * @return a <Provider> that allows us to share data to lower level components
 */
export default async function buildLDProvider(config) {
  const { clientSideID, user } = config;
  const { ldClient } = await initLDClient({ clientSideID, user });

  const LDProvider = ({ children }) => {
    const [ldData, setLDData] = useState({
      flags: fetchFlags(ldClient),
      ldClient,
    });

    useEffect(() => {
      // Allows us to subscribe to flag changes
      // More info here: https://docs.launchdarkly.com/sdk/features/flag-changes
      ldClient.on('change', (changes) => {
        console.log('Received feature flag changes:', changes);
        const flattened = getFlattenedFlagsFromChangeset(changes);

        if (Object.keys(flattened).length > 0) {
          setLDData(prev => ({ ...prev, flags: { ...prev.flags, ...flattened } }));
        }
      });
    }, []);

    return <Provider value={ldData}>{children}</Provider>;
  };

  return LDProvider;
}
