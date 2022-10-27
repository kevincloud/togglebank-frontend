import AccountDetails from "./AccountDetails";
import OverlayContext from './Overlay/OverlayContext';

function SideDrawer() {
  return (
    <OverlayContext.Consumer>
      {
        overlayCtx => (
          <div className={`absolute top-0 right-0 z-[60] h-full w-1/2 bg-blue-dark flex items-center justify-center side-drawer ${overlayCtx.drawerOpen ? "side-drawer-open" : "side-drawer-closed"}`}>
            {/* Decide what drawer component to render here */}
            { overlayCtx.drawerComponent === 'account' && <AccountDetails/> }
          </div>
        )
      }
    </OverlayContext.Consumer>
  );
}

export default SideDrawer;