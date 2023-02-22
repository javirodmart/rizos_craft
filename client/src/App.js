import './App.css';
import Navigation from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Item from './component/Item';
import { useEffect, useState } from 'react';
import { UserProvider } from "../src/User";

function App() {
  // useStates
  const [item, setItem] = useState([])
  // Items Fetch
  useEffect(() => {
    fetch(`/items`)
      .then(res => res.json())
      .then(data => setItem(data))
  }, [])



  return (
    <>
    <UserProvider>
       <Navigation />
      <Switch>
        <Route path="/items">
          <Item item={item} />
        </Route>
      </Switch>
    </UserProvider>
     
    </>
  );
}

export default App;
