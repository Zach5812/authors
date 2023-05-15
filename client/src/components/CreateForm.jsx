import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateForm = (props) => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]); 

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors`, {name})
            .then(response => {
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }



    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label>Name</label>
                <input type="text" name="name" id="" value={name} onChange={e => setName(e.target.value)} />
                {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
                <button type='submit'>Submit</button>
            </div>
            {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
        </form>
    )
}
export default CreateForm