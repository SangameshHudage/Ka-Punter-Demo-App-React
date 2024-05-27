import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavigationBar from "./modules/NavigationBar/NavBar";
import Profile from "./modules/NavigationBar/Hamburger/HamburgerContent/HamConParts/Profile";
import WithdrawalDetails from "./modules/NavigationBar/Hamburger/HamburgerContent/HamConParts/WithdrawalDetails";
import CreatId from "./modules/NavigationBar/Hamburger/HamburgerContent/HamConParts/CreateId";
import Bonus from "./modules/NavigationBar/Hamburger/HamburgerContent/HamConParts/Bonus";
import Rules from "./modules/NavigationBar/Hamburger/HamburgerContent/HamConParts/Rules";
import Terms from "./modules/NavigationBar/Hamburger/HamburgerContent/HamConParts/Terms";
import Offers from "./modules/NavigationBar/Hamburger/HamburgerContent/HamConParts/Offers";
import Notifications from "./modules/NavigationBar/Hamburger/HamburgerContent/HamConParts/Notifications";
import Help from "./modules/NavigationBar/Hamburger/HamburgerContent/HamConParts/Help";
import WalletComponent from "./modules/Wallet/WalletComponent";
import Banner from "./modules/MyBanner/Banner";


function App() {
  return (
    <div className="App">
      {/* <img className="BackgroundgImg-MainApp-Cotainer" src="https://ss.manage90.com/go-punt/assetsv15/cbtfpunter/img/yellow-bg.jpg" alt="Background-Img"></img> */}
      <NavigationBar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/withdraw-details" element={<WithdrawalDetails />} />
        <Route path="/create-id" element={<CreatId />} />
        <Route path="/bonus" element={<Bonus />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="help" element={<Help />} />
      </Routes>
      <WalletComponent/>
      <Banner/>
    </div>
  );
}

export default App;
