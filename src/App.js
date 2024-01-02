import "./App.css";
import Signup from "./components/Signup/Signup";

import AddEvent from "./admin/AddEvent";
import Admin from "./admin/AdminProfile";
import ViewEvents from "./admin/ViewEvents";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
import Login from "./features/login/Login";
import Day2 from "./EventPage/Day2/Day2";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./features/login/ForgotPassword";
import UpdatePassword from "./features/login/UpdatePassword";
import VerifyEmail from "./components/Signup/VerifyEmail";
import UserContextProvider from "./ContextApi/UserContextProvider";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Events from "./EventPage/Event";
import Competitions from "./Competitions/Competitions";
import LnmHacks from "./lnmhacks/LnmHacks";
import Team from "./Team/Team"
import { Home } from "./home/home";
import Preloader from "./Preloader/Preloader";
import AboutUs from "./aboutUs/AboutUs";
import Campus from "./CampusAmbassador/Campus";
import Accomodation from "./accomodation/accomodation";
import Explore from './Explore/Explore'
import Testing from "./Explore/Testing";
function App() {
  return (
    <UserContextProvider>
      <Toaster />

      <Preloader />
      <Header />
      <Routes>
        {/* <Route path="/" element={<Profile />} /> */}
        <Route path="/Day2" element={<Day2 />} />
        <Route path="/" element={<><Home /></>} />
        <Route path="/Team" element={<Team />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/Admin" element={<Admin />} />
        <Route exact path="/Admin/AddEvent" element={<AddEvent />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id" element={<UpdatePassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        {/* <Route path="/Profile" element={<Profile />} /> */}
        <Route path="/events" element={<Events />} /> 
        <Route path="/competitions" element={<Competitions />} /> 
        <Route path="/campus-ambassador" element={<Campus />} /> 
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/lnm-hacks" element={<LnmHacks />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/testExplore" element={<Testing />} />
        {/* <Route path="/our-team" element={<OurTeam />} /> */}
        {/* <Route exact path="/Admin/ViewEvents" element={<ViewEvents />} />  */}
      </Routes>
      {/* <Header />  */}
    </UserContextProvider>
  );
}

export default App;
