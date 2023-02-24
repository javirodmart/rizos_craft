import './App.css';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Item from './component/Item';
import { useContext, useEffect, useState } from 'react';
import { UserProvider, UserContext } from "../src/User";
import Home from './component/Home';

function App() {
  // useStates
  const [item, setItem] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [itemsNumber, setItemsNumber] = useState([])
  const [totalPrice, setTotalPrice] = useState([])
  const user = useContext(UserContext)
  // Items Fetch
  useEffect(() => {
    fetch(`/items`)
      .then(res => res.json())
      .then(data => (setIsLoading(false), setItem(data)))
  }, [])

  useEffect(() => {
    fetch(`all_items`)
      .then(res => res.json())
      .then(data => (setItemsNumber(data)))
  }, [])

  useEffect(() => {
    fetch(`total_price/1`)
      .then(res => res.json())
      .then(data => (setTotalPrice(data)))
  }, [])



  // handle new 
  const handelProduct = (addNewProduct) => {
    setItemsNumber({ ...itemsNumber, addNewProduct })
  }

  // handel delete



  return (
    <>

      <Navigation itemsNumber={itemsNumber} totalPrice={totalPrice} />
      <Switch>

      <Route path="/home">
          <Home />
        </Route>

        <Route path="/items">
          <Item item={item} handelProduct={handelProduct} isLoading={isLoading} />
        </Route>

        <Route path="/add_item">
          <Item />
        </Route>

      </Switch>


    </>
  );
}

export default App;
