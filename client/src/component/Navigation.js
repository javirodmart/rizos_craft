import { Container, Navbar, Nav, NavItem, Button, NavbarBrand, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink } from "react-router-dom";
import Me from "../assets/me.png"
import { useEffect, useState } from "react";



const Navigation = ({ itemsNumber, totalPrice }) => {

    const [products, setProducts] = useState("Products")
    const [show, setShow] = useState(false);


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
    // }


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
                                        <NavLink className="nav-link" to={item.path} key={item.id}>
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
                                                Cart
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <p>
                                                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                                ipsam atque a dolores quisquam quisquam adipisci possimus
                                                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                                deleniti rem!
                                            </p>
                                        </Modal.Body>
                                    </Modal>


                                    <span className="qty">{itemsNumber} Product</span>
                                    <span className="qty">${totalPrice}</span>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item">
                                <div className="d-flex flex-row">
                                    <img src={Me} className="rounded-circle" width="30" />
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link d-flex align-items-center" data-abc="true"><span>Javier Rodriguez</span><i className='bx bxs-chevron-down'></i></a>
                            </li>

                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}
export default Navigation