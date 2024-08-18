// Dejé comentado Home para la evaluación de Cart

import React, { useState } from 'react';
import NavigationBar from './components/Navbar';
//import Home from './components/Home';
import Footer from './components/Footer';
import Cart from './components/Cart';
// import Register from './components/Register';
// import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  //const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <NavigationBar />
      {/*<Home />*/}
      <Cart />
      {/*{showLogin ? <Login /> : <Register setShowLogin={setShowLogin} />}*/}
      <Footer />
    </div>
  );
}

export default App;
