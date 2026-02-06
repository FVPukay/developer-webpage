import React from "react";
import NavigationBar from './NavigationBar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero.component';
import './App.css';
import Approach from './Approach.component';
import CareerImpact from './CareerImpact.component';
import Testimonial from './Testimonial.component';
import Project from './Project.component';
import Connect from './Connect.component';
import Footer from './Footer.component';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <Approach />
      <CareerImpact />
      <Testimonial />
      <Project />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
