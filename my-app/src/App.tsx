import React from 'react';

import "./scss/style.scss";
import { BrowserRouter as Router, Routes, Route, Outlet, } from "react-router-dom";
import Banner from './pages/Banner';
import Header from './public/Header';
import Login from './public/Login';
import Signup from './public/Signup';
import Practice from './pages/Practice';
function App() {
  function PublicLayout() {
    return (
      <>
        <div className="login__container">
          <Header />
          <Outlet />
          {/* <Footer /> */}
        </div>
      </>
    );
  }
  function LoginLayout() {
    return (
      <>
        <Outlet />
        {/* <Footer /> */}

      </>
    );
  }
  return (
    <Router>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
        </Route>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Banner />} />
          {/* <Route path="/" element={<Practice />} /> */}



        </Route>



      </Routes>
    </Router>

  );
}

export default App;
