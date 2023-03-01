import { useEffect, useState, useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { UserContext } from "../context/UserContext"

const ItemCard = ({ items, id, name, price, image, description, handleDeleteItem,handelItemCart }) => {
    const history = useHistory()
    const user = useContext(UserContext);
    const userId = user.user.id
    const [added, setAdded] = useState(false)
    const [formData, setFormData] = useState({
        user_id: user.user.id,
        item_id: items.id
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
                    res.json().then((data) => (alert("Added To Cart")))
                } else {
                }
            })
    }
    const deleteItem = () =>{
        fetch(`items/${id}`,{
            method: "DELETE"
        })
            handleDeleteItem(id)
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

                        {/* {add ? <p> &#10004;</p> : null}
        {user.admin ? <Button onClick={handleDelete} > <i class="fa fa-trash-o"></i> </Button> : null} */}
                        <div className="item-button">
                            <Link to="/items"> <button onClick={handleAdd} > <i class="fa fa-plus" style={{ fontsize: + "36px" }}></i> </button></Link>
                             <button  onClick={deleteItem} > <i style={{ fontsize: + "36px" }} class="fa">&#xf00d;</i> </button>
                         
                        </div>

                    </Card.Body>
                </Card>

            </div>
        </>
    )
}
export default ItemCard