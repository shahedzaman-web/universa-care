import "./App.css";
import Header from "./Components/Header/Header";
import Services from "./Components/Services/Services";
import React from "react";
import Feature from "./Components/Feature/Feature";
import Accreditation from "./Components/Accreditation/Accreditation";
import Review from "./Components/Review/Review";
import Appointment from "./Components/Appointment/Appointment";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
      <Feature></Feature>
      <Accreditation></Accreditation>
      <Review></Review>
      <Appointment></Appointment>
      <Footer></Footer>
    </div>
  );
}

export default App;
