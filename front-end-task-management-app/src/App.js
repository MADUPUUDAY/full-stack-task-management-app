import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import './App.css';
import { gapi } from 'gapi-script';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import Home from './components/Home';
import Footer1 from './components/Footer';
import TryItFree from './components/TryItFree';
import ContactUs from './components/ContactUs';
import Prices from './components/Prices';
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions';
import AboutUs from './components/AboutUs';
import Faqs from './components/Faqs';
import TaskTracker from './components/TaskTracker';

const clientId = "694167151358-0ocfue3ssdbeoa3vp3ibcnp80a4qrag0.apps.googleusercontent.com"; 

axios.defaults.baseURL = 'http://localhost:5000';  // backend URL

const App = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    }
    gapi.load('client:auth2', start);
  }, []);


  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/try-it-free" element={<TryItFree />} />
          <Route path='/contactUs' element={<ContactUs/>}/>
          <Route path='/prices' element={<Prices/>}/>
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='/termsandservices' element={<TermsAndConditions/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/help' element={<Faqs/>}/>
          <Route path='/tasktracker' element={<TaskTracker/>}/>
        </Routes>
        <Footer1/>

    </GoogleOAuthProvider>
  );
};

export default App;
