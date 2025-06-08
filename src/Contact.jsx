import { assets } from './assets/assets';
import './Contact.css'

function Contact(){

    return(
        <div className="Contact">
            <div className="contact-h1">
                <h2>CONTACT US</h2>
            </div>
            <div id="contact">
                <img src={assets.contact_image} alt="" />
                <div className="contact-info">
                    <h2>OUR OFFICE</h2>
                    <div className='p1'>
                        <p>00000 Willms Station</p>
                        <p>Suite 000, Washington, USA</p>
                    </div>
                    <div className='p1'>
                        <p>Tel: (000) 000-0000</p>
                        <p>Email: greatstackdev@gmail.com</p>
                    </div>
                    <h2>CAREERS AT PRESCRIPTO</h2>
                    <p id='pta'>Learn more about our teams and job openings.</p>
                    <button>Explore jobs</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;