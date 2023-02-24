import { Link } from "react-router-dom"
import { Modal } from "react-bootstrap"
import React, { useState } from "react"
import AddItem from "./AddItem";

const Home = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            {/* <h1>Hello</h1>
        <Link to="/add_item"></Link> */}
            <span onClick={() => setShow(true)} className="shop-bag"><i className="fa fa-shopping-bag"></i></span>
            <div className="d-flex flex-column ms-2">

                <Modal
                    size="xl"
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    variant="primary"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Product
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <AddItem />
                    </Modal.Body>
                </Modal>
            </div>


        </>
    )
}

export default Home