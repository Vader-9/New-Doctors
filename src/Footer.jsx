import { assets } from './assets/assets'
import './Footer.css'

function Footer(){

    return(
        <div className='footer'>
             <div id="footer">
                <div className="first-foot">
                    <img src={assets.admin_logo} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <p>industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                    <p>since the 1500s, when an unknown printer took a galley of type and</p>
                    <p>scrambled it to make a type specimen book.</p>
                </div>
                <div className="second-foot">
                    <h1>COMPANY</h1>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="third-foot">
                    <h1>GET IN TOUCH</h1>
                    <p>+0-000-000-000</p>
                    <p>greatstackdev@gmail.com</p>
                </div>
             </div>
             <hr />
             <p>Copyright 2024 @ Greatstack.dev - All Right Reserved.</p>
        </div>
    )
}

export default Footer