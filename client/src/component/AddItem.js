import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';


const AddItem = ({ handelNewItem,item }) => {
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState("")
    const [description, setDescription] = useState("")
    const [added, setAdded] = useState(false)
    const [Loading, setLoading] = useState(false)

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        img_url: "",
        description: ""
    })

    function handleFile(e) {
        e.preventDefault()
        setImg(e.target.value)
        // const file = e.target.files[0]
        // const reader = new FileReader()

        // reader.onload = (e) => {
        //     setImg(e.target.result)
        // }
        // reader.readAsDataURL(file)
    }
   


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



  
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setAdded(false)
        const newData = formData
        fetch(`/items`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                price: price,
                img_url: img,
                description: description
            }),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => handelNewItem(data),setAdded(true),setLoading(false))
                } else {
                    res.json().then((errorData) => setErrors(errorData.errors))
                }

            })
    

        // fetch(`/charges`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name: name,
        //         default_price_data: price,
        //         images: img,
        //         description: description,
                
        //     }),
        // })

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
                        <input accept='image/png, image/jpeg, image/jpg' type="text" name="img_url" placeholder="Image Url" onChange={handleFile} />
                        <br></br>
                        <br></br>
                        {renderImage}
                    </label>
                    <br></br>
                    <label>
                        <br></br>
                        <input type="text" name="description" placeholder="description" value={description} onChange={handleDescription} />
                    </label>
                    <br></br>
                    <input type="submit" value="submit" />
                    {added ? <h3 style={{ color: "green" }} >Successful Added</h3> : null}
                    {Loading ? <h4>Loading....</h4> : null}

                </form>
            </div>

        </>
    )
}

export default AddItem