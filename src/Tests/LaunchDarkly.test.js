import { getFlattenedFlagsFromChangeset } from "../Providers/LaunchDarkly/utils.js";

describe('LaunchDarkly Provider utils', () => {
  let unflattenedChanges = {
    'enable-cool-feature-1': { current: true },
    'enable-cool-feature-2': { current: false },
  };

  it('flattens flag object', () => {
    const flattened = getFlattenedFlagsFromChangeset(unflattenedChanges);
  
    expect(flattened['enable-cool-feature-1']).toBe(true);
    expect(flattened['enable-cool-feature-2']).toBe(false);
  });
});
