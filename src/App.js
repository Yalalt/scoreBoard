import { useState } from "react";
import Header from "./component/Header";
import Users from "./component/Users";
import Controller from "./component/Controller";

function App() {
  let [userNo, setUserNo] = useState(0);
  let [users, addUser] = useState([
    { id: "1", name: "Mike", score: 10 },
    { id: "2", name: "John", score: 16 },
    { id: "3", name: "Jackie", score: 20 },
  ]);

  // const addUserToList = (val) => {};

  return (
    <div className="container md:mx-auto flex flex-col items-center">
      <Header users={users} />
      <Users usersData={users} />
      <Controller />
    </div>
  );
}

export default App;
