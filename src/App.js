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
import { Home } from "./home/home";
import Campus from "./CampusAmbassador/Campus";
function App() {
  return (
    <UserContextProvider>
      <Toaster />

      <Header />
      <Routes>
        {/* <Route path="/" element={<Profile />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/Admin" element={<Admin />} />
        <Route exact path="/Admin/AddEvent" element={<AddEvent />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id" element={<UpdatePassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/events" element={<Events />} /> 
        <Route path="/competitions" element={<Competitions />} /> 
        <Route path="/campus-ambassador" element={<Campus />} /> 

        {/* <Route exact path="/Admin/ViewEvents" element={<ViewEvents />} />  */}
      </Routes>
      {/* <Header />  */}
    </UserContextProvider>
  );
}

export default App;
