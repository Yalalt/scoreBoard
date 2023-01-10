const Header = (props) => {
  return (
    <div className="flex mt-10 justify-between align-middle w-full font-bold">
      <span className="pt-2 text-lg">
        Total Player: {props.users.length + 1}
      </span>
      <div className="flex gap-x-6">
        <button
          type="button"
          className="border rounded-md p-2 bg-orange-400 hover:bg-orange-600 text-white"
        >
          By Name
        </button>
        <button
          type="button"
          className="border rounded-md p-2 bg-orange-400 hover:bg-orange-600 text-white"
        >
          By Score
        </button>
      </div>
    </div>
  );
};
export default Header;
