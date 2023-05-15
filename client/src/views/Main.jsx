import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateForm from '../components/CreateForm';

const Main = () => {
    const [authList, setAuthList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(response => {
                setAuthList(response.data)
            })
            .catch(err => console.log(err))
    }, [])
    
    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
            .then(response => {
                removeFromDom(deleteId)
            })
            .catch(err => console.log(err))
        }
        const removeFromDom = (deleteId)=>{
            const filteredList = authList.filter((eachAuth) =>
            eachAuth._id !== deleteId);
            setAuthList(filteredList);
        }
    
    
    return (
        <div >
            <h1>All Authors:</h1>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authList.map((eachAuth, idx)=>(
                            <tr key={idx}>
                                <td>{eachAuth.name}</td>
                                <td>
                                    <button><Link to={`/authors/${eachAuth._id}/edit`}>
                                    Edit</Link></button>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(eachAuth._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main