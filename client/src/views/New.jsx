import React from 'react'
import CreateForm from '../components/CreateForm'
import { Link } from 'react-router-dom'

const New = () => {
    return (
        <div>
            <CreateForm />
            <Link style={{textDecoration: "none", color: "blue"}} to="/">Go Home</Link>
        </div>
    )
}

export default New