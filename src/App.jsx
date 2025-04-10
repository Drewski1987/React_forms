import { useState } from 'react'
import './App.css'
import Authenticate from './Components/Authenticate'
import SignUpForm from './Components/SignUpForm'
// import Validation from './Components/Validation'

function App() {
  const [token, setToken] = useState(null)
 
  return (
    <>

      <SignUpForm token= {token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
      {/* <Validation token={token} setToken={setToken}/> */}
    </>
  )
}

export default App
