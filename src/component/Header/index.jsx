const Header = (props) => {
  // props.callUserState function name
  const nameBySort = () => {
    props.users.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
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
    <div className="flex justify-between w-full font-bold border-b-4 pb-2">
      <span className="pt-2 text-lg text-blue-600">
        Total Player: {props.users.length}
      </span>
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
