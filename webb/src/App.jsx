import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Contexts/AuthContext";
import { useState } from "react";
import "./App.css";
import Contact from "./components/Layout/Contact/InputForm";
import Home from "./Pages/Home";
import LogInForm from "./components/Layout/LogIn/LogInForm";
import SignUpForm from "./components/Layout/LogIn/SignUpForm";
import DashBoard from "./Pages/DashBoard";
import PrivateRoute from "./PrivateRoute";
import ResetPassword from "./components/Layout/LogIn/ResetPassword";
import OurMission from "./Pages/OurMission"

function App() {
  const [navStyle, setNavStyle] = useState(false);

  return (
    //authprovider är en context som skickar värden till alla components som ligger i App.jsx
    <AuthProvider>
      {/*routes anger en specefik url till en komponent*/}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/sign-in" element={<LogInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashBoard />
              </PrivateRoute>
              //private route är en component som kollar om currentUser finns eller inte 
              //om currentUser finns så visas DashBoard¨
              //om currentUser inte finns så visas LogInForm
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
