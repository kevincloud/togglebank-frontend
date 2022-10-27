import { initialize } from 'launchdarkly-js-client-sdk';
import { fetchFlags } from './utils';

/**
 * Internal function to initialize the `LDClient`.
 *
 * @param clientSideID Your project and environment specific client side ID
 * @param user A LaunchDarkly user object
 *
 * @return An initialized client and flags
 */
const initLDClient = async ({ clientSideID, user }) => {
  console.log("Initializing LD client");
  const ldClient = initialize(clientSideID, user);

  return new Promise((resolve) => {
    ldClient.on('ready', () => {
      console.log("Successfully initialized with LD client - ready to request flags!");
      const flags = fetchFlags(ldClient);
      resolve({ flags, ldClient });
    });
  });
};

export default initLDClient;
