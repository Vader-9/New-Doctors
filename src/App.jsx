import Home from './Home';
import Alldoctors from './Alldoctors';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import Create from './Create';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [vader, setVader] = useState(false)
  return (
    <>
      <Nav setVader={setVader} />
      {vader?<Create></Create>:
      <Routes>
        <Route path='/' element={<Home setVader={setVader} />} />
        <Route path='/doctors' element={<Alldoctors />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>}
      <Footer />
    </>
  );
}

export default App;

