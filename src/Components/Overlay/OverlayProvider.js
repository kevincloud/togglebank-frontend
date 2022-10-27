import { useState } from 'react';
import OverlayContext from './OverlayContext';

function OverlayProvider( { children }) {
  let [drawerOpen, setDrawerOpen] = useState(false);
  let [drawerComponent, setDrawerComponent] = useState('account');

  let toggleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  let value = { drawerOpen, drawerComponent, toggleDrawerOpen, setDrawerComponent };

  return <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>
}

export default OverlayProvider;