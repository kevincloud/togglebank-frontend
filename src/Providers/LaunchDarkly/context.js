import { createContext } from 'react';

// Context provides a way to share values like these between components
// without having to explicitly pass a prop through every level of the tree.
// More information here: https://reactjs.org/docs/context.html
const LDContext = createContext({ flags: {}, ldClient: undefined });
const { Provider } = LDContext;

export { Provider, LDContext };
