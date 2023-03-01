import { Container, Navbar, Nav, NavItem, Button, NavbarBrand, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink, useHistory } from "react-router-dom";
import Me from "../assets/me.png"
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import CartItem from "./CartItem";
import Cart from "./Cart";
import CheckOutForm from "./CheckOutForm"



const Navigation = ({ itemsNumber, totalPrice, updateUser }) => {

    const [products, setProducts] = useState("Products")
    const user = useContext(UserContext)
    const [show, setShow] = useState(false);
    const history = useHistory()


    const navInfo = [
        {
            id: 1,
            id2: 2,
            path: `/home/${user.user.id}`,
            name: `Home`
        },
        {
            id: 3,
            id2: 4,
            path: `/all_items`,
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
                    history.push('/login')
                    updateUser(null)
                }
            })
        updateUser(null)
    }


    return (
        <>

            <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
                <Container>
                    <NavbarBrand className="brand" href="/">
                        <h1>Rizos Crafts</h1>
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end ms-auto" activeKey="/home">
                            {navInfo.map((item) => (
                                <>
                                    <NavItem key={item.id} className="nav-link">
                                        <NavLink key={item.id2} className="nav-link" to={item.path}>
                                            {item.name}
                                        </NavLink>
                                    </NavItem>
                                </>
                            ))}
                        </Nav>
                        <div className="col-md-2">
                            <div className="d-flex d-none d-md-flex flex-row align-items-center">
                                <span onClick={() => setShow(true)} className="shop-bag"><i className="fa fa-shopping-bag"></i></span>
                                <div className="d-flex flex-column ms-2">

                                    <Modal
                                        size="xl"
                                        show={show}
                                        onHide={() => setShow(false)}
                                        dialogClassName="modal-90w"
                                        aria-labelledby="example-custom-modal-styling-title"
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="example-custom-modal-styling-title">
                                                {user.user.first_name}`s Cart
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Cart />
                                        
                                        </Modal.Body>
                                    </Modal>


                                    {/* <span className="qty">{itemsNumber} Product</span> */}
                                    {/* <span className="qty">${totalPrice}</span> */}
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav d-flex align-items-center">
                            <li key="1" className="nav-item">
                                <div className="d-flex flex-row">
                                    <img src={Me} className="rounded-circle" width="30" />
                                </div>
                            </li>
                            <li key='2' className="nav-item">
                                <a href="/home" className="nav-link d-flex align-items-center" data-abc="true"><span>{user.user.first_name} {user.user.last_name}</span><i className='bx bxs-chevron-down'></i></a>
                            </li>

                        </ul>
                    </Navbar.Collapse>
                    <Button className="logout" style={{ color: "black" }} onClick={handleLogOut}>Sign Out</Button>
                </Container>
            </Navbar >
        </>
    )
}
export default Navigation