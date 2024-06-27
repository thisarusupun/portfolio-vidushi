import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Research from "./pages/Research";
import Success from "./pages/Successful";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return <div>
  <Router>
      <Routes>
        <Route path="/" element={<Contacts/>} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
    
    </div>;
};

export default App;
