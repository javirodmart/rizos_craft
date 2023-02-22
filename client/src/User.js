import React, { useEffect, useState } from "react";

const UserContext = React.createContext()
function UserProvider({ children }) {
    const [user,setUser] = useState([])
useEffect(()=>{
    fetch("users/1")
    .then(res => res.json())
    .then(data => setUser(data))
},[])

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
  }
  
  export { UserContext, UserProvider };