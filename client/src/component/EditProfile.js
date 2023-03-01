import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from "../context/UserContext";


function EditProfile({ updatedUser, user, id }) {
    const [errors, setErrors] = useState([]);
    const [first_name, setFirst_name] = useState(user.first_name)
    const [last_name, setLast_name] = useState(user.last_name)
    const [img, setImg] = useState('')
    const [email, setEmail] = useState(user.email)
    const [added, setAdded] = useState(false)
    const [Loading, setLoading] = useState(false)
    const userUpdate = (users) => {
        updatedUser(users)
    }


    function handleFile(e) {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onload = (e) => {
            setImg(e.target.result)
        }
        reader.readAsDataURL(file)
    }
    


    const handleFirstName = (e) => {
        e.preventDefault()
        setFirst_name(e.target.value)
    }
    const handleLastName = (e) => {
        e.preventDefault()
        setLast_name(e.target.value)
    }

    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }




    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setAdded(false)
        fetch(`/users/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                img_url: img,
                email: email,

            }),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => (setAdded(true), setLoading(false), userUpdate(data)))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }

            })


    }

    const renderImage =
        img !== "" ?
            <>
                <img className="preview-img" src={img} />
            </>
            :
            <><p>upload here</p></>
    return (
        <>
            <div className="login">
                <h1>Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <br></br>
                        <input type="text" name="first_name" placeholder="Name" value={first_name} onChange={handleFirstName} />
                    </label>
                    <br></br>
                    <label>
                        <br></br>
                        <input placeholder="Last Name" type="text" name="last_name" value={last_name} onChange={handleLastName} />
                    </label>
                    <br></br>
                    <label>
                        <br></br>
                        <input accept='image/png, image/jpeg, image/jpg' type="file" name="img_url" placeholder="Image Url" onChange={handleFile} />
                        <br></br>
                        <br></br>
                        {renderImage}
                    </label>
                    <br></br>
                    <label>
                        <br></br>
                        <input type="text" name="Email" placeholder="Email" value={email} onChange={handleEmail} />
                    </label>
                    <br></br>
                    <input type="submit" value="submit" />
                    {added ? <h3 style={{ color: "green" }} >Successful Added</h3> : null}
                    {Loading ? <h4>Loading....</h4> : null}
                </form>
                {errors ? <div>{errors}</div> : null}
            </div>

        </>
    )
}

export default EditProfile