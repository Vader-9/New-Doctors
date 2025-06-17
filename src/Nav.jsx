import { Link, useLocation } from 'react-router-dom';
import { assets } from "./assets/assets";
import './Nav.css';

function Nav({setVader, setRex}) {
  const location = useLocation();
  console.log(setVader)

  return (
    <div className="nav">
      <img src={assets.admin_logo} alt="Logo" />
      <ul className="links">
        <li className={location.pathname === '/' ? 'active' : ''} onClick={()=>setVader(false)}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/doctors' ? 'active' : ''} onClick={()=>setVader(false)}>
          <Link to="/doctors">All Doctors</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''} onClick={()=>setVader(false)}>
          <Link to="/about">About</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''} onClick={()=>setVader(false)}>
          <Link to="/contact">Contact</Link>
        </li>
        <a href='Admin.jsx'>Admin panel</a>
      </ul>
      <button onClick={()=>setVader(true)}>Create account</button>
    </div>
  );
}

export default Nav;

