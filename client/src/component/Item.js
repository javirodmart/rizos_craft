import ItemCard from "./ItemCard"
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"
import AddItem from "./AddItem"
const Item = ({ item, isLoading, setSearch, handelNewItem, handleDeleteItem, handelItemCart }) => {
    const [show, setShow] = useState()


    const itemArray = item.length && item.map((items) => {
        return <ItemCard key={items.id}
            id={items.id}
            name={items.name}
            price={items.price}
            image={items.img_url}
            description={items.description}
            items={items}
            handleDeleteItem={handleDeleteItem}


        />
    })


console.log(item)

    return (
        <>
            <h1>For Sale </h1>
            <Button className="add-item-button" onClick={() => setShow(true)} >Add Products</Button>
            <div className="d-flex flex-column ms-2">

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
                            Product
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddItem item={item} handelNewItem={handelNewItem} />
                    </Modal.Body>
                </Modal>
            </div>
            <input className="search-bar" type="text" placeholder="Search.." on onChange={(e) => { setSearch(e.target.value) }}></input>
            <div>{isLoading ? <h1>Loading</h1> : itemArray}</div>

        </>
    )
}

export default Item