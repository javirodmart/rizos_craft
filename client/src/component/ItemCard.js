import { useEffect, useState, useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../User";

const ItemCard = ({ items, id, name, price, image, description, handelProduct }) => {
    const history = useHistory()
    const user = useContext(UserContext);
    const userId = user.id
    const [added, setAdded] = useState(false)
    const [formData, setFormData] = useState({
        user_id: userId,
        item_id: items.id
    })
    console.log(id)
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
                    res.json().then((data) => alert("Added To Cart"))
                } else {
                }
            })
    }
    const deleteFromCart = () =>{
        fetch(`items/${items.id}`,{
            method: "DELETE"})
    }
    return (

        <>
            <div className="item-card" style={{ width: '20rem' }}>
                <Card border="warning">
                    <Card.Body >
                        <Card.Title id="true">{name}</Card.Title>
                        <img className="img" variant="top" src={items.img_url} />
                        <Card.Text>
                            <p>${price}</p>
                            <p>{description}</p>
                        </Card.Text>

                        {/* {add ? <p> &#10004;</p> : null}
        {user.admin ? <Button onClick={handleDelete} > <i class="fa fa-trash-o"></i> </Button> : null} */}
                        <div className="item-button">
                            <Link to="/items"> <button onClick={handleAdd} > <i class="fa fa-plus" style={{ fontsize: + "36px" }}></i> </button></Link>
                            <Link> <button onClick={deleteFromCart} > <i style={{ fontsize: + "36px" }} class="fa">&#xf00d;</i> </button></Link>
                            {added && <i className={`fa fa-check`} style={{ color: "green" }} aria-hidden="true"></i>}
                        </div>

                    </Card.Body>
                </Card>

            </div>
        </>
    )
}
export default ItemCard