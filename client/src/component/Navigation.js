import { Container, Navbar, Nav, NavItem, Button, NavbarBrand } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink } from "react-router-dom";
import Me from "../assets/me.png"



const Navigation = () => {
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
                                <span className="shop-bag"><i className="fa fa-shopping-bag"></i></span>
                                <div className="d-flex flex-column ms-2">
                                    <span className="qty">1 Product</span>
                                    <span className="qty">$27.90</span>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav d-flex align-items-center">
                            <li className="nav-item">
                                <div className="d-flex flex-row">
                                    <img src={Me} className="rounded-circle" width="30"/>
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