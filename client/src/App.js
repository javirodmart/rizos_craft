import './App.css';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import Item from './component/Item';
import { useContext, useEffect, useState, } from 'react';
import Home from './component/Home';
import SignUp from './component/SignUp';
import Login from './component/Login';
import AddItem from './component/AddItem';
import GuestNav from './component/GuestNav';
import { UserContext,UserProvider } from './context/UserContext';
import CartItem from './component/CartItem';
import Payment from './component/Cart';
import Pay from './component/pay';
import Cart from './component/Cart';




function App() {
  // useStates
  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [itemsNumber, setItemsNumber] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  const [search, setSearch] = useState("")
  const [user, setUser] = useState("")
  const history = useHistory()
  const [userCarts, setUserCarts] = useState([])
  const { id } = useParams()



  
  useEffect(() => {
    fetch("/authorized_user").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        setUser(null)
        history.push("/login")

      }
    });
  }, []);

  const updateUser = (user) => setUser(user)

  useEffect(() => {
    fetch(`/items`)
      .then(res => res.json())
      .then(data => (setItem(data), setIsLoading(false)))
  }, [])


  const handelNewItem = (newItem) => {
    setItem([...item, newItem])
  }

  const handelNewCart = (newCart) => {
    setUserCarts([...userCarts, newCart])
  }


  const handelUpdatedUser = (newUser) => {
    setUser([...user, newUser])
  }

  function handleDeleteItem(deleteItem) {
    const updatedArray = item.filter((items) => {
      return items.id !== deleteItem
    })
    setItem(updatedArray)
  }

 


  if (!user) return (
    <>
      <UserProvider>
        <GuestNav />
        <Switch>
          <Route exact path="/login">
            <Login updateUser={updateUser} />
          </Route>
          <Route path="/signup">
            <SignUp updateUser={updateUser} />
          </Route>
        </Switch>
      </UserProvider>
    </>
  )

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navigation itemsNumber={itemsNumber} updateUser={updateUser}   handelNewCart={handelNewCart} userCarts={userCarts} totalPrice={totalPrice} />


        <Switch>

          <Route exact path={`/`}>
            <Home updateUser={updateUser} setUser={setUser} handelUpdatedUser={handelUpdatedUser} />

          </Route>

          <Route path="/all_items">
            <Item  handelNewCart={handelNewCart} item={item} handelUpdatedUser={handelUpdatedUser} handelNewItem={handelNewItem} handleDeleteItem={handleDeleteItem} setSearch={setSearch}/* searchArray={searchArray} */ isLoading={isLoading} />
          </Route>

          <Route path="/add_item">
            <AddItem item={item} handelNewItem={handelNewItem} />
          </Route>

          <Route path="/checkout">

            <Pay userCarts={userCarts} />
          </Route>

        </Switch>
      </UserContext.Provider>


    </>

  );
}

export default App;
