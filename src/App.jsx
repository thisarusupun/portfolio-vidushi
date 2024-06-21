import Achievements from './pages/Achievements';
import About from './pages/About';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Achievements />
    </div>
  );
  
};

export default App;
