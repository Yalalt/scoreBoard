const Users = (props) => {
  props.usersData.map((item) => {
    console.log("Item: " + item.id);
    console.log("Item: " + item.name);
    console.log("Item: " + item.score);
    return (
      <div className="flex gap-x-2 border">
        <span className="">{item.id}</span>
        <span className="">{item.name}</span>
        <span className="">{item.score}</span>
      </div>
    );
  });
};
export default Users;
