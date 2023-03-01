import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function SignUp({ updateUser }) {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const { first_name, last_name, email, password, password_confirmation } = formData

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            first_name,
            last_name,
            email,
            password,
            password_confirmation
        }

        fetch(`/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        updateUser(user)
                        history.push(`/home`)
                        console.log(user)
                    })
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }
            })

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    return (
        <>
            <div className='login' >
                <div className='form'>
                    <h1>Welcome To Rizos Crafts </h1>
                    <h1>Sign up</h1>
                </div>
                <br></br>
                <br></br>

                <form onSubmit={onSubmit}>
                    


                    <input placeholder='Name' type='text' name='first_name' value={first_name} onChange={handleChange} />
                    <br></br>

                    <br></br>
                    <input placeholder='Last Name' type='text' name='last_name' value={last_name} onChange={handleChange} />
                    <br></br>
                    <br></br>

                    <input placeholder='Email' type='text' name='email' value={email} onChange={handleChange} />
                    <br></br>
                    <br></br>

                    <input placeholder='Password' type='password' name='password' value={password} onChange={handleChange} />
                    <br></br>
                    <br></br>

                    <input placeholder='Password Confirmation' type='password' name='password_confirmation' value={password_confirmation} onChange={handleChange} />
                    <br></br>
                    <br></br>
                    <input type='submit' value='Sign up!' />
                </form>
                <br></br>
                {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default SignUp