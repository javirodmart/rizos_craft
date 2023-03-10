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
import defaultPic from "../assets/user_1.png"
import { Link } from "react-router-dom";



const Navigation = ({ itemsNumber, totalPrice, updateUser, userCarts, handleDeleteCart }) => {

    const [products, setProducts] = useState("Products")
    const user = useContext(UserContext)
    const [show, setShow] = useState(false);
    const history = useHistory()
    const [img,setImg] = useState("")
    const img_url = user.user.img_url
    const [total,setTotal] = useState()

    const userId = user.user.id

    const navInfo = [
        {
            id: 1,
            path: `/`,
            name: `Home`
        },
        {
            id: 2,
            path: `/all_items`,
            name: `Items`,
        },{
            id: 3,
            path: `/contact`,
            name: `Contact`,
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
    function handleTotal() {
        fetch(`/total/${user.user.id}`)
          .then(r => r.json())
          .then(data => setTotal(data))
      }

      useEffect(()=>{
        handleTotal()
      },[])

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
                                            <Cart setShow={setShow} total={total} handleTotal={handleTotal} handleDeleteCart={handleDeleteCart} userCarts={userCarts} />

                                        </Modal.Body>
                                    </Modal>


                                    {/* <span className="qty">{itemsNumber} Product</span> */}
                                    <span className="qty"> Total: ${total}</span>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav d-flex align-items-center">
                            <li key="1" className="nav-item">
                                <div className="d-flex flex-row">
                                    <img src={user.user.img_url} className="rounded-circle" width="30" />
                                </div>
                            </li>
                            <li key='2' className="nav-item">
                                <Link to="/" className="nav-link d-flex align-items-center" data-abc="true"><span>{user.user.first_name} {user.user.last_name}</span><i className='bx bxs-chevron-down'></i></Link>
                            </li>

                        </ul>
                    </Navbar.Collapse>
                   

                </Container>
                 <div className="logout">
                        <Button  style={{ color: "black" }} onClick={handleLogOut}>SignOut</Button>
                    </div>
            </Navbar >
        </>
    )
}
export default Navigation