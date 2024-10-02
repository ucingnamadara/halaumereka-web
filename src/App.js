import logo from "./logo.svg";
import "./App.css";
import { Homepage } from "./pages/homepage";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { Reviews } from "./pages/reviews";
import { Navbar } from "./components/ui/navbar";
import { Footer } from "./components/ui/footer";
import { HowWeWork } from "./pages/how-we-work";
import { FetchStory } from "./services/medium-service";
import { Article } from "./pages/article";

function App() {
  FetchStory()
  return (
    <div>
      <Navbar />
      <div className="">
        <Homepage />
        <About />
        <Services />
        <HowWeWork />
        <Reviews />
        <Article/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
