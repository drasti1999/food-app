import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import PopularMenu from "./components/PopularMenu";
import FreeDelivery from "./components/FreeDelivery";
import Discount from "./components/Discount";
import HowToOrder from "./components/HowToOrder";
import Footer from "./components/Footer";
import AgusWaiters from "./components/AgusWaiters";

function App() {
  return (
    <div>
      <Home />
      <PopularMenu />
      <Discount />
      <HowToOrder />
      <FreeDelivery />
      <AgusWaiters />
      <Footer />
      {/* <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <a 
           className="App-link"
           href="https:reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
       </header>
     </div>*/}
    </div>
  );
}

export default App;
