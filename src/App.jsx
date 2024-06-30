import Blogs from "./pages/Blogs";
import Contacts from "./pages/Contacts";
import Research from "./pages/Research";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return <div>
<Navbar className="z-40"/> 
<Resume/>
<Blogs/>
<Research/>
<Contacts/> 

  
    
    </div>;
};

export default App;
