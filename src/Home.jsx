import { doctors, specialityData } from './assets/assets';
import Header from './Header';
import './Home.css'
import { assets } from './assets/assets';



function Home({setVader}) {

    console.log(specialityData)


    return (
        <div className='Home'>
            <Header></Header>
            <div className="speciality">
                <div className="specialityp">
                    <h2>Find by Speciality</h2>
                    <p>Simply browse through our extensive of truseted doctors, schedule</p>
                    <p>your appointment is stress free</p>
                </div>
                <div className="speciality-img">
                    {specialityData.map((speciality, index) => {
                        return (
                            <div key={index} className='special'>
                                <img src={speciality.image} alt="" />
                                <p>{speciality.speciality}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="top-doctor">
                <div id="top-doctor">
                    <div className="top-doctor-h1">
                    <h1>Top doctor</h1>
                    <p>Simply browse through our extensive list of trusted doctors</p>
                </div>
                <div className="doc-grid">
                    {doctors.map((doctor, _id)=> {return(
                        <div className="doctor" key={_id}>
                            <img src={doctor.image} alt="" />
                            <div className="doc-info">
                            <li>Avaliable</li>
                            <h3>{doctor.name}</h3>
                            <p>{doctor.speciality}</p>
                            </div>
                        </div>
                    )})}
                </div>
                </div>
            </div>
           
            <div className="appointment">
                <div className="appoint">
                    <h1>Book Appointment</h1>
                    <h1>With 100+ Trusted Doctors</h1>
                    <button onClick={()=>setVader(true)}>Create account </button>
                </div>
                <div className="appoint-img">
                    <img src={assets.appointment_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;