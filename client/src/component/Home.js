import { Link } from "react-router-dom"
import { Modal, Button } from "react-bootstrap"
import React, { useState, useContext, useEffect } from "react"
import AddItem from "./AddItem";
import Me from "../assets/me.png"
import { UserContext } from "../context/UserContext";
import EditProfile from "./EditProfile";

const Home = ( updateUser) => {
    const user = useContext(UserContext)
    const [show, setShow] = useState(false);
    console.log(user)

    return (
        <>

            <br></br>
            <div className="user-name">
                <h1>Welcome  {user.user.first_name}</h1>
            </div>

            <div className="user-profile">
                <div className="user-img-card">
                    <img className="user-img" src={Me} />
                    <h2>{user.user.first_name} {user.user.last_name} </h2>
                    <p>{user.user.email}</p>
                    {user.user.admin ? <p>Admin</p> : null}
                    <button onClick={() => setShow(true)} >Edit profile</button>

                    <Modal
                        size="xl"
                        show={show}
                        onHide={() => setShow(false)}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                Edit Profile
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                           <EditProfile  updateUser={updateUser} user={user.user} id={user.user.id} />
                        </Modal.Body>
                    </Modal>

                </div>

            </div>


        </>
    )
}

export default Home