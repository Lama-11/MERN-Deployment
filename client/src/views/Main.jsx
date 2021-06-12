import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Home from './Home';
import New from './New';
import Edit from './Edit';
import Details from './Details';
import { Router } from "@reach/router";

export default () => {
    const [message, setMessage] = useState("Loading...")
    useEffect(() => {
        axios.get("http://localhost:8000/api")
            .then(res => setMessage(res.data.message))
    }, []);
    return (
        <div>
            <h1>Pet Shelter</h1>
            <Router>

                <Home path="/" />
                <New path="/new" />
                <Edit path="/edit/:id" />
                <Details path="/details/:id" />
            </Router>

        </div>
    )
}

