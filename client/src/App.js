import './App.css';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch,useHistory } from 'react-router-dom';
import Item from './component/Item';
import { useContext, useEffect, useState } from 'react';
import Home from './component/Home';
import SignUp from './component/SignUp';
import Login from './component/Login';
import AddItem from './component/AddItem';
import GuestNav from './component/GuestNav';
import { UserContext } from './context/UserContext';
import CartItem from './component/CartItem';
import Payment from  './component/Cart';


function App() {
  // useStates
  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [itemsNumber, setItemsNumber] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  const [search,setSearch] = useState("")
  const [user,setUser] = useState([])
  const history = useHistory()
  const [carts,setCarts] = useState([])
  // const updateUser = (user) => setUser(user)
  //  Fetch


  useEffect(() => {
        fetch("/authorized_user").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }else {
            setUser(null)
            history.push("/login")
           
        }
        });
      }, []);

      const updateUser = (user) => setUser(user)

  useEffect(() => {
    fetch(`/items`)
      .then(res => res.json())
      .then(data => ( setItem(data),setIsLoading(false)))
  }, [])

  useEffect(() => {
    fetch(`all_items`)
      .then(res => res.json())
      .then(data => (setItemsNumber(data)))
  }, [])

  // useEffect(() => {
  //   fetch(`total_price/1`)
  //     .then(res => res.json())
  //     .then(data => (setTotalPrice(data)))
  // }, [])
  
  // useEffect(() => {
  //   fetch(`total_price/1`)
  //     .then(res => res.json())
  //     .then(data => (setTotalPrice(data)))
  // }, [])

  



  const handelNewItem = (newItem) => {
    setItem([ ...item, newItem] )
  }

  function handelUpdateUser(updateUser) {
    const updateUsers = user.user.map((item) => {
      if (item.id === updateUser.id) {
        return updateUser;
      } else {
        return item;
      }
    });
    setUser(updateUsers)
  }

  const handelItemCart = (newItem) => {
    setItemsNumber([ ...itemsNumber, newItem] )
  }

  function handleDeleteItem(deleteItem) {
    const updatedArray = item.filter((items) => {
        return items.id !== deleteItem
    })
    setItem(updatedArray)
}
  
  // const searchArray = item.filter((items)=>{
  //   return items.name.toLowerCase().includes(search.toLowerCase())
  // })


// if(!user) return(
//   <Switch>
//     <Route path='/signup'>
//         <SignUp />
//     </Route>

//     <Route path='/login'>
//         <Login/>
//     </Route>

//   </Switch>


// )
if (!user) return(
<>
  <UserContext.Provider value={{user,setUser}}>
  <GuestNav />
  <Switch>
  <Route exact path="/login">
  <Login updateUser={updateUser}/>
  </Route>
    <Route path="/signup">
      <SignUp updateUser={updateUser} />
    </Route>
  </Switch>
  </UserContext.Provider>
  </>
)

  return (
    <>
<UserContext.Provider value={{user,setUser}}>
<Navigation itemsNumber={itemsNumber} updateUser={updateUser} totalPrice={totalPrice} />

      <Switch>
      
      <Route path={`/home/${user.id}`}>
          <Home updateUser={updateUser}  handelUpdateUser={ handelUpdateUser} />
          
        </Route>

        <Route path="/all_items">
          <Item handelItemCart={handelItemCart} item={item} handelNewItem={handelNewItem} handleDeleteItem={handleDeleteItem} setSearch={setSearch}/* searchArray={searchArray} */ isLoading={isLoading} />
        </Route>

        <Route path="/add_item">
          <AddItem item={item} handelNewItem={handelNewItem}/>
        </Route>

        <Route path="/cart_items">
          <CartItem />
        </Route>

      </Switch>
</UserContext.Provider>


    </>

  );
}

export default App;
