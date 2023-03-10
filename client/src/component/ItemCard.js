import React, { useEffect, useState, useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import Rating from "./Rating"



const ItemCard = ({ items, id, name, price, image, description, handleDeleteItem, handelNewCart, handleDeleteCart }) => {
    const history = useHistory()
    const user = useContext(UserContext);
    const userId = user.user.id
    const [added, setAdded] = useState(false)
    const [toggle, setToggle] = useState(false);
    const [heart, setHeart] = useState(false)
    const [rating,setRating]= useState()
const [hover, setHover] = useState()
    const [formData, setFormData] = useState({
        user_id: user.user.id,
        item_id: items.id,
        name: name,
        price: price,
        img_url: image,
        description: description
    })

    const handleAdd = (e) => {
        e.preventDefault()
        console.log(formData)
        fetch(`/carts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
            .then(res => {
                if (res.ok) {
                    res.json().then((data) => (handelNewCart(data), alert("Added To Cart")))
                } else {
                }
            })
    }
    const deleteItem = () => {
        fetch(`items/${id}`, {
            method: "DELETE"
        })

        handleDeleteItem(id)

    }
    const hearts = 5
    function handleClick() {
        setHeart(!heart)
    }
    return (

        <>
            <div className="item-card" style={{ width: '20rem' }}>
                <Card id={id} border="danger">
                    <Card.Body >
                        <Card.Title id="true">{name}</Card.Title>
                        <img className="item-img" variant="top" src={items.img_url} />
                        <Card.Text> ${price} </Card.Text>
                        <Card.Text> {description} </Card.Text>

                       

                        <div className="item-button">
                            <Link to="/items"> <button onClick={handleAdd} > Add To Cart </button></Link>
                            {user.user.admin ? <button onClick={deleteItem} > Delete Item </button> : null}

                        </div>

                    </Card.Body>
                </Card>

            </div>
        </>
    )
}
export default ItemCard