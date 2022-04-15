import React, { useState, createContext } from "react";
import "./App.css";
//components
import Header from "./components/Header/Header";
import UserList from "./components/User/UserList";
import AddUser from "./components/User/AddUser";
import EditUser from "./components/User/EditUser";
//react-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//mock data
let userRecord = [
  {
    FirstName: "Subham",
    LastName: "Gill",
    Designation: "manager",
    Experience: 3,
    Dob: "12/12/1998",
    id: 1,
    image:
      "https://res.cloudinary.com/webcraze-jan/image/upload/v1584023734/usr.png",
  },
  {
    FirstName: "Peter",
    LastName: "Parker",
    Designation: "CEO",
    Experience: 13,
    Dob: "12/12/1993",
    id: 2,
    image:
      "https://res.cloudinary.com/webcraze-jan/image/upload/v1584023734/glo.jpg",
  },
];

//context
export let context = createContext();

function App() {
  //state
  let [userData, setUserData] = useState(userRecord);
  console.log(userData);

  //handle add
  let handleAddUser = (childData) => {
    console.log(childData);
    setUserData([...userData, childData]);
  };

  //handle edit
  let handleEditUser = (childData) => {
    //console.log(childData);
    let updateUser = userData.map((item) =>
      item.id === childData.id ? (item = childData) : item
    );
    setUserData(updateUser);
    console.log(updateUser);
    //setUserData([...userData, childData]);
  };

  //handle delete
  let handleDeleteUser = (childID) => {
    let remaining = userData.filter((item) => item.id !== childID);
    console.log(remaining);
    setUserData(remaining);
  };

  return (
    <context.Provider value={{ name: "ranjan", handleEditUser }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <UserList userData={userData} handleDeleteUser={handleDeleteUser} />
          </Route>
          <Route exact path="/add">
            <AddUser handleAddUser={handleAddUser} />
          </Route>
          <Route exact path="/edit" component={EditUser} />
        </Switch>
      </Router>
    </context.Provider>
  );
}

export default App;
