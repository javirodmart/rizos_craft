import { useEffect, useState,useContext } from "react"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UserContext } from "../User";

const ItemCard = ({ items, id, name, price, image, description }) => {
    const user = useContext(UserContext);
    const [formData,setFormData]= useState({
        user_id: user.id,
        item_id: items.id
    })
    console.log(id)
    const handleAdd = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (

        <>
            <div className="item-card" style={{ width: '20rem' }}>
                <Card border="warning">
                    <Card.Body >
                        <Card.Title id="true">{name}</Card.Title>
                        <img className="img" variant="top" src={image} />
                        <Card.Text>
                            <p>${price}</p>
                            <p>{description}</p>
                        </Card.Text>

                        {/* {add ? <p> &#10004;</p> : null}
        {user.admin ? <Button onClick={handleDelete} > <i class="fa fa-trash-o"></i> </Button> : null} */}
                        <div className="item-button">
                            <Link> <button onClick={handleAdd} > <i class="fa fa-plus" style={{ fontsize: + "36px" }}></i> </button></Link>
                            <Link> <button > <i style={{ fontsize: + "36px" }} class="fa">&#xf00d;</i> </button></Link>
                        </div>

                    </Card.Body>
                </Card>

            </div>
        </>
    )
}
export default ItemCard