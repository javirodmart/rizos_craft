import ItemCard from "./ItemCard"
const Item = ({ item,handelProduct,isLoading  }) => {
    const itemArray = item.map((items)=>{
       return <ItemCard key={items.id}
        name={items.name}
        price={items.price}
        image={items.img_url}
        description={items.description}
        items={items}
        handelProduct ={handelProduct }
        /> 
    }) 
    console.log(item)
    return (
        <>
            <h1>For Sale </h1>
            <input className="search-bar" type="text" placeholder="Search.."></input>
            <div>{isLoading ? <h1>Loading</h1> : itemArray}</div>
        </>
    )
}

export default Item