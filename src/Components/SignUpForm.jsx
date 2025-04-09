import { useState } from "react"


function SignUpForm (){

const [username, setUsername] = useState ("");
const [ password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handleSubmit (event) {
    event.preventDefault();
    console.log("Hello!")
}

    return(
        <>
        <h2>Sign Up!</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input name="username" onChange={(event)=> setUsername(event.target.value)} 
                
                />
            </label>
            <label>
                Password: <input /> 
            </label>

            <button>Submit</button>
        </form>
        </>
    )
}

export default SignUpForm