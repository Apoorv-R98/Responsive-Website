import "./App.css";
import Navbar from "./navbar/Navbar";
import Home from "./Home";
import Services from "./services/Services";
import Footer from "./Footer";
import Client from "./client/Client";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Client />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
