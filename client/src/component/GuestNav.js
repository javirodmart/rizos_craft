import { Container, Navbar, Nav, NavItem, Button, NavbarBrand, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink, useHistory } from "react-router-dom";
import Me from "../assets/me.png"
import { useEffect, useState } from "react";



const GuestNav = ({ itemsNumber, totalPrice,updateUser }) => {

    const [products, setProducts] = useState("Products")
    const [show, setShow] = useState(false);
    const history = useHistory()
    const [login, setLogin] = useState(false)
     const handleClick = () => {
       setLogin(!login)
    }


    console.log(itemsNumber)
    const navInfo = [
        {
            id: 1,
            path: `/home`,
            name: `Home`
        },
        {
            id: 2,
            path: `items`,
            name: `Items`,
        }
    ]
    // if (itemsNumber === 1) {
    //     setProducts("Product")
    const handleLogOut = () => {
        // DELETE `/logout`
        fetch('/logout', {
            method: 'DELETE'
        })
            .then(res => {
                if (res.ok) {
                    updateUser(null)
                    history.push('/login')
                }
            })
        updateUser(null)
    }

    return (
        <>

<Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
            <Container>
                <Navbar.Brand className="brand" href="/">
                    Risos Crafts

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end ms-auto" activeKey="/home">
                        <Nav.Item  className="nav-link">
                            <NavLink onClick={handleClick} className="nav-link" to={login ? "/login" :"/signup"}>
                                {login ? "SIGN IN!": "SIGN UP!"}
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}
export default GuestNav