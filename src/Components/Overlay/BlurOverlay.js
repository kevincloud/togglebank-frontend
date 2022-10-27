import { useContext } from 'react';
import OverlayContext from './OverlayContext';

function BlurOverlay({ children }) {
  const overlayCtx = useContext(OverlayContext)

  return (
    <div 
      className={`absolute top-0 left-0 h-full w-full z-[55] ${overlayCtx.drawerOpen ? "overlay-on" : "overlay-off"}`}
      onClick={() => {
        if (overlayCtx.drawerOpen) overlayCtx.toggleDrawerOpen();
      }}
    >
      { children }
    </div>
  )
}

export default BlurOverlay;