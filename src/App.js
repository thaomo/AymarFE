import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import ContactUs from './pages/Contact_Us/ContactUs';
import Donation from './pages/Donate/Donation'
import Grants from './pages/Grants/Grants'
import Gallery from './pages/Gallery/Gallery';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import FooterContainer from './containers/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/ContactUs' component={ContactUs} />
      <Route exact path='/Donation' component={Donation} />
      <Route exact path='/Grants' component={Grants} />
      <Route exact path='/Gallery' component={Gallery} />
      <FooterContainer />
    </Router>

  );
}

export default App;
