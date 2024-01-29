import React,{useState} from 'react'
import Home from './components/home/Home.jsx'
import Menu from './components/menu/Menu'
import BookTable from './components/booktable/BookTable'
import Navbar from './components/navbar/Navbar.jsx'
import AboutUs from './components/aboutus/AboutUs.jsx'
function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      <Navbar onComponentChange={handleComponentChange} />
     
      {activeComponent === 'home' && <Home />}
      {activeComponent === 'booktable' && <BookTable />}
      {activeComponent === 'menu' && <Menu />}
      {activeComponent === 'aboutus' && <AboutUs />}
    </div>
  );
}

export default App;