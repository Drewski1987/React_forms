import { useState } from "react"


function SignUpForm (setToken){

const [username, setUsername] = useState ("");
const [ password, setPassword] = useState("");
const [error, setError] = useState(null);

async function handleSubmit (event) {
    event.preventDefault();
    console.log("Hello!")
    try{
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
            {
            method: "Post", 
            headers: {
                    "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        )
    const result = await response.json()
    console.log(result)
    setToken(result.token);

    } catch(error){
        setError(error.message)
    }
}
    return(
        <>
        <h2>Sign Up!</h2>
        {
          error &&  <p>{error}</p>
        }
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input name="username" onChange={(event)=> setUsername(event.target.value)} 
                
                />
            </label>
            <label>
                Password: <input type="password" value={password} onChange={(event)=> setPassword(event.target.value)} /> 
            </label>

            <button>Submit</button>
        </form>
        </>
    )
}

export default SignUpForm