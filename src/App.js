import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AuthProvider from './Components/Auth/AuthProvider.js';
import RequireAuth from './Components/Auth/RequireAuth.js';
import Page from './Pages/Page';
import GlobalOverlay from './Components/Overlay/GlobalOverlay.js';
import Home from './Pages/Home.js';
import Register from './Pages/Register.js';
import Profile from './Pages/Profile.js';
import Accounts from './Pages/Accounts.js';
import Crypto from './Pages/Crypto.js';

function App() {
  return (
    <GlobalOverlay>
      <AuthProvider defaultUser={null}>
          <Router>
            <Page>
              <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/accounts" element={<RequireAuth><Accounts/></RequireAuth>}/>
                <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>}></Route>
                <Route path="/crypto" element={<RequireAuth><Crypto/></RequireAuth>}></Route>
              </Routes>
            </Page>
          </Router>
      </AuthProvider>
    </GlobalOverlay>
  );
}

export default App;
