import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdatePage = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                const author = response.data
                setName(author.name);
            })
            .catch(error => console.log(error))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/authors/${id}`, {name})
            .then(response => {
                navigate(`/`)
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

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                navigate(`/`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" id="" value={name} onChange={e => setName(e.target.value)} />
                    <Link to={"/"}>Cancel</Link>
                    <button type='submit'>Submit</button>
                </div>
                {errors.map((err, index) => <p key={index} style={{color: "red"}}>{err}</p>)}
            </form>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default UpdatePage;