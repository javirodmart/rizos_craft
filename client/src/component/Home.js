import { Link } from "react-router-dom"
import { Modal, Button } from "react-bootstrap"
import React, { useState, useContext, useEffect } from "react"
import AddItem from "./AddItem";
import Me from "../assets/me.png"
import { UserContext } from "../context/UserContext";

const Home = () => {
    const user = useContext(UserContext)
    const [show, setShow] = useState(false);
    
   
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
                    <button >Edit profile</button>

                </div>

            </div>


        </>
    )
}

export default Home