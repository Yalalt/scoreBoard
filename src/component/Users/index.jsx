const Users = (props) => {
  return (
    <table className="border-separate border-spacing-1 border border-slate-400 w-full text-center text-lg my-10">
      <thead className="w-10">
        <tr>
          <th className="border border-slate-300">ID</th>
          <th className="border border-slate-300">Name</th>
          <th className="border border-slate-300">Score</th>
        </tr>
      </thead>
      <tbody>
        {props.usersData.map((user, ind) => (
          <tr key={ind}>
            <td className="border border-slate-300">#{user.id}</td>
            <td className="border border-slate-300">{user.name}</td>
            <td className="border border-slate-300">
              <button
                className="bg-blue-300 w-10 mr-4 rounded-md"
                onClick={() => props.subScore(ind)}
              >
                -
              </button>
              {user.score}
              <button
                className="bg-blue-300 w-12 ml-4 rounded-md"
                onClick={() => props.addScore(ind)}
              >
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Users;
