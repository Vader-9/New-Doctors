import './About.css'
import { assets } from './assets/assets';

function About() {

    return (
        <div id='About'>
            <div className="abouth1">
                <h1>ABOUT US</h1>
            </div>
            <div className="About">
                <div className="about-img">
                    <img src={assets.about_image} alt="" />
                </div>
                <div className="p-tags">
                    <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                    <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
                    <h3>Our Vision</h3>
                    <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                </div>
            </div>
            <div className="ttags">
                <h2>WHY CHOOSE US</h2>
                <div className="three">
                    <div className="one">
                        <h3>EFFICIENCY:</h3>
                        <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                    </div>
                    <div className="one">
                        <h3>CONVENIENCE:</h3>
                        <p>Access to a network of trusted healthcare professionals in your area.</p>
                    </div>
                    <div className="one">
                        <h3>PERSONALIZATION:</h3>
                        <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;