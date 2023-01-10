import { useState } from "react";
import Header from "./component/Header";
import Users from "./component/Users";
import Modal from "./component/Modal";

function App() {
  let [users, addUser] = useState([
    { id: "1", name: "Mike", score: 10 },
    { id: "2", name: "John", score: 16 },
    { id: "3", name: "Jackie", score: 20 },
  ]);
  const userAdd = (newUser) => addUser([...users, {id: users.length + 1, name: newUser.name, score: newUser.score}]);

  const addScore = (sc) => { 
    const newList = [...users];
    newList[sc].score++;
    addUser([...users]);
  };
  
  const downScore = (scc) => { 
    const newList = [...users];
    newList[scc].score--;
    addUser([...users]);
  };

  

  return (
    <div className="App h-screen flex flex-col items-center justify-center container md:mx-auto ">
      <Header users={users} callUserState={addUser} />
      <Users usersData={users} addScore={addScore} subScore={downScore} />
      <Modal userAddFunc={userAdd} />
    </div>
  );
}

export default App;
