import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from "react-bootstrap";

const AddItem = () => {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        img_url: "",
        description: ""
    })

    function handleFile(e) {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.onload = (e) => {
            setImg(e.target.result)
        }
        reader.readAsDataURL(file)
    }
    console.log(img)


    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    const handlePrice = (e) => {
        e.preventDefault()
        setPrice(e.target.value)
    }

    const handleDescription = (e) => {
        e.preventDefault()
        setDescription(e.target.value)
    }

    

    console.log(img)
    const handleSubmit = (e) => {
        e.preventDefault()


        const newData = formData
        fetch(`/items`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name:name,
                price:price,
                img_url:img,
                description:description}),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => console.log(data))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }
            })
    }
    console.log(name,price,description,img)
    const renderImage =
        img !== "" ?
            <>
                <img src={img} />
            </>
            :
            <><p>upload here</p></>
    return (
        <>
            <div className="form">
                <h1>Add Product</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <br></br>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={handleName} />
                    </label>
                    <br></br>
                    <label>
                        <br></br>
                        <input placeholder="Price" type="number" name="price" value={price} onChange={handlePrice} />
                    </label>
                    <br></br>
                    <label>
                        <br></br>
                        <input accept='image/png, .png, .jpeg, image/jpg' type="file" name="img_url"  placeholder="Image Url" onChange={handleFile} />

                    </label>
                    <br></br>
                    <label>
                        <br></br>
                        <input type="text" name="description" placeholder="description" value={description} onChange={handleDescription} />
                    </label>
                    <br></br>
                    <input type="submit" value="submit" />

                </form>
            </div>

        </>
    )
}

export default AddItem