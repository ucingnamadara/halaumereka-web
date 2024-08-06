import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./pages/homepage";
import { About } from "./pages/about";
import { Services } from "./pages/services";

function App() {
  return (
    <div className="container">
      <Homepage />
      <About />
      <Services />
    </div>
  );
}

export default App;
