import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-primary bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        {/* We'll add testimonials once after getting some works */}

        <div className="relative z-0">
          <Contact />
          {/* <DirectContact /> */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
