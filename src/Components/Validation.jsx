import { useState } from "react"


// function Validation (setToken){
//     const [eightCharacters, setEightCharacters] = useState("")
//     const [errorMessage, setErrorMessage] = useState("")

//     const handleChange = (event)=>{
//         setEightCharacters(event.target.value);
//         setErrorMessage("")
//     };
//     const handleBlur = ()=> {
//         if (eightCharacters.length !==8) {
//             setErrorMessage('Please enter exactly 8 characters.');
            
//         }else {
//             setErrorMessage("")
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (eightCharacters.length === 8) {
//             alert( `Submitted value: ${setEightCharacters}`);

//         }else{
//             setEightCharacters("Please enter exactly 8 characters before submitting.");
//         }
//     }

    
//     return(
//         <form onSubmit={handleSubmit}>
//             <input type="text"
//             value={eightCharacters}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             maxLength={8}/> 
//             {errorMessage && <p style={{color: "red", fontSize: "small" }}> {errorMessage}</p>}
//             <button type="submit">Submit</button>
//         </form>
//     )
// }

// export default Validation
