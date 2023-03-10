import { Link, useParams } from "react-router-dom"
import { Modal, Button } from "react-bootstrap"
import React, { useState, useContext, useEffect } from "react"
import AddItem from "./AddItem";
import Me from "../assets/me.png"
import defaultPic from "../assets/user_1.png"
import { UserContext } from "../context/UserContext";
import EditProfile from "./EditProfile";
import UserPurchases from "./UserPurchases";

const Home = (handelUpdatedUser) => {
    const user = useContext(UserContext)
    const [show, setShow] = useState(false);
    const [img, setImg] = useState("")
    const img_url = user.user.img_url
    const [userPurchase, setUserPurchase] = useState([])
    const [showPurchase, setShowPurchase] = useState()
    const userId =user.user.id

    function getUserPurchase(){
        fetch(`user_purchases/${userId}`)
        .then(r => r.json())
        .then(data => (setUserPurchase(data)))
    }
    function handleClick(){
        setShowPurchase(!showPurchase)
        getUserPurchase()
    }

    useEffect(() => {
       getUserPurchase()

    }, [])
   
    

    const purchaseArray = userPurchase.length && userPurchase.map((purchase) => {
        const purchase_item = purchase.item
        return <UserPurchases
            name={purchase_item.name}
            price={purchase_item.price}
            image={purchase_item.img_url}
            description={purchase_item.description}
            id={purchase.id}
            rating={purchase.item_rating}
            getUserPurchase={getUserPurchase}
            userId={userId}
            timestamp={purchase.created_at}

        />
    })


    return (
        <>

            <br></br>
            <div className="user-name">
                <h1>Welcome  {user.user.first_name}</h1>
            </div>
           

            <div className="user-profile">
                <div className="user-img-card">
                    <img className="user-img" src={img_url ? img_url : defaultPic} />
                    <h2>{user.user.first_name} {user.user.last_name} </h2>
                    <p>{user.user.email}</p>
                    {user.user.admin ? <p>Admin</p> : null}
                    <button onClick={() => setShow(true)} >Edit profile</button>

                    <Modal
                        size=""
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                        variant="primary"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Edit Profile
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <EditProfile setUser={user.setUser} user={user.user} id={user.user.id} setShow={setShow} />
                        </Modal.Body>
                    </Modal>

                </div>

            </div>
        
                 <button className="purchase-button" onClick={handleClick}>Past purchases</button>
     
           
            <div className="purchases-container ">
               {showPurchase ? purchaseArray : null }
            </div>
                
            

        </>
    )
}

export default Home