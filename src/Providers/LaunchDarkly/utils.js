/**
 * Gets the flags to pass to the provider from the changeset.
 *
 * @param changes the `LDFlagChangeset` from the ldClient onchange handler.
 *
 * @return an `LDFlagSet` with the current flag values
 */
export const getFlattenedFlagsFromChangeset = (changes) => {
  const flattened = {};

  for (const key in changes) {
    flattened[key] = changes[key].current;
  }

  return flattened;
};

/**
 * Retrieves flag values.
 *
 * @param ldClient LaunchDarkly client
 *
 * @returns an `LDFlagSet` with the current flag values
 */
export const fetchFlags = (ldClient) => {
  return ldClient.allFlags();
};

/**
 * Updates LD user custom attributes.
 *
 * @param ldClient LaunchDarkly client
 * @param userId Logged in user ID
 * @param userState User state
 *
 * @returns an `LDFlagSet` with the current flag values
 */
export const updateLDUser = async (ldClient, userId, userState) => {

  if(!userState.beta){
    userState.beta = false;
  }
  if(!userState.usertype){
    userState.usertype = "user";
  }

  const ldUser = {
    "key": userId, 
        "custom": {
          "beta": userState.beta,
          "usertype": userState.usertype
        }
  };

  return await ldClient.identify(ldUser, null, function(){});
};
