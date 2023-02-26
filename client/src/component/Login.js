
import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserContext'



function Login({ updateUser }) {
    const { user } = useContext(UserContext)
    console.log(user)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { email, password } = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            email,
            password
        }
        // Logs in user
        fetch(`/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user =>
                        (updateUser(user), history.push(`/home/${user.name}`))
                    )
                } else {
                    res.json().then(json => setErrors(json.errors))
                }
            })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            <div className='login'>
                <div className='form'>
                    <h1 className='headers'>Welcome Back Risos Crafts </h1>
                </div>
                <form className='form' onSubmit={onSubmit}>
                    <h2>Sign In</h2>

                    <br></br>
                    <input placeholder='Email' type='text' name='email' value={email} onChange={handleChange} />
                    <br></br>
                    <br></br>
                    <input placeholder='Passowrd' type='password' name='password' value={password} onChange={handleChange} />
                    <br></br>

                    <br></br>
                    <input type='submit' value='Log in!' />
                </form>
                {errors ? <div>{errors}</div> : null}

            </div>


        </>
    )
}

export default Login