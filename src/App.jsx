import { Route, Routes, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Home from './Home';
import Alldoctors from './Alldoctors';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Create from './Create';
import Admin from './Admin';

function App() {
  const [vader, setVader] = useState(false);
  const [rex, setRex] = useState(true);

  const location = useLocation(); // 👈 Get current route path

  const isAdminPage = location.pathname === '/admin';

  return (
    <>
      {!isAdminPage && <Nav setVader={setVader} />} {/* 👈 Only show Nav if not admin */}

      {vader ? (
        <Create />
      ) : (
        <Routes>
          <Route path='/' element={<Home setVader={setVader} />} />
          <Route path='/doctors' element={<Alldoctors />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      )}

      {!isAdminPage && <Footer />} {/* 👈 Only show Footer if not admin */}
    </>
  );
}

export default App;


