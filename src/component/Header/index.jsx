const Header = (props) => {

  // props.callUserState function name
  const nameBySort = () => {
    props.users.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if(nameA < nameB) {
        return -1;
      }

      if(nameA > nameB) {
        return 1;
      }

      return 0;
    });

    props.callUserState([...props.users]);
  };

  const scoreBySort = () => {
    props.users.sort((a, b) => b.score - a.score);
    props.callUserState([...props.users]);
  };

  return (
    <div className="flex mt-10 justify-between align-middle w-full font-bold">
      <span className="pt-2 text-lg">Total Player: {props.users.length}</span>
      <div className="flex gap-x-6">
        <button
          type="button"
          className="border rounded-md p-2 bg-orange-400 hover:bg-orange-600 text-white"
          onClick={nameBySort}
        >
          By Name
        </button>
        <button
          type="button"
          className="border rounded-md p-2 bg-orange-400 hover:bg-orange-600 text-white"
          onClick={scoreBySort}
        >
          By Score
        </button>
      </div>
    </div>
  );
};
export default Header;
