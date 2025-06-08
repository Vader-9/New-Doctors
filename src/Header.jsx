
import { assets } from './assets/assets';
import './Header.css'


function Header() {

    return (
        <div className="Header">
            <div className="first">
                <h1>Book appointment</h1>
                <h1>With trusted doctors</h1>
                <div className="firstimg">
                    <div className="img">
                        <img src={assets.group_profiles} alt="" />
                    </div>
                    <div className="firstp">
                        <p>Simply browse through our extensive list of doctors</p>
                        <p>schedule your appointment stress free</p>
                    </div>
                </div>
                <button>Book appointment <img src={assets.arrow_icon} alt="" /></button>
            </div>
            <div className="docpic">
                <img src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header;