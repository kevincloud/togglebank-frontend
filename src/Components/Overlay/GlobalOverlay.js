import AccountProvider from "../Account/AccountProvider";
import SideDrawer from "../SideDrawer";
import BlurOverlay from "./BlurOverlay";
import OverlayProvider from "./OverlayProvider";

// Include all application data providers in this component - acts as the top level of the app tree
function GlobalOverlay({ children }) {
  return (
    <div className="relative overflow-hidden">
      <OverlayProvider>
        <AccountProvider>
          <BlurOverlay>
              { children }
          </BlurOverlay>
          <SideDrawer />
        </AccountProvider>
      </OverlayProvider>
    </div>
  )
}

export default GlobalOverlay;