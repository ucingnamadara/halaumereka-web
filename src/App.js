import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./pages/homepage";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { Reviews } from "./pages/reviews";
import { Navbar } from "./components/ui/navbar";
import { Footer } from "./components/ui/footer";
import { HowWeWork } from "./pages/how-we-work";

function App() {
  return (
    <div>
      <Navbar />
      <div className="">
        <Homepage />
        <About />
        <Services />
        <HowWeWork />
        <Reviews />
      </div>
      <Footer />
    </div>
  );
}

export default App;
