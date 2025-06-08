import './Create.css'

function Create(){

    return(
        <div id="create">
           <div className="create">
            <h1>Create Account</h1>
            <p>Please sign up to book appointment</p>
            <div className="input">
                <p>Full Name</p>
                <input type="text" required />
            </div>
            <div className="input">
                <p>Email</p>
                <input type="text"  required/>
            </div>
            <div className="input">
                <p>password</p>
                <input type="text" required />
            </div>
            <button>Create account</button>
            <div className="des">
                <p>Already has an account</p>
                <a href="">Login here</a>
            </div>
           </div> 
        </div>
    )
}

export default Create;