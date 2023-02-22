import ItemCard from "./ItemCard"
const Item = ({ item }) => {
    console.log(item)
    const itemArray = item.map((items)=>{
       return <ItemCard key={items.id}
        name={items.name}
        price={items.price}
        image={items.image}
        description={items.description}
        items={items}
        />
    })
    return (
        <>
            <h1>For Sale </h1>
            <input className="search-bar" type="text" placeholder="Search.."></input>
            <div>{itemArray}</div>
        </>
    )
}

export default Item