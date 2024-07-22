// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { VoteProvider } from './context/VoteContext';
import Voting from './Components/Voting';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import ResultsPage from './Components/Results';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


const App = () => {
  return (
    <VoteProvider>
      <Navbar/>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer/>
    </VoteProvider>
  );
};

export default App;
