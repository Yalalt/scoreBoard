import React, { useState } from "react";

const Modal = ({ userAdd }) => {
  const [showModal, setShowModal] = useState(false);
  const [userName, setUsername] = useState("");
  const [userScore, setUserscore] = useState("");

  const handleAddUserProps = (e) => {
    e.preventDefault();
    return userAdd.userAddFunc({ name: userName, score: userScore });
  };

  return (
    <div>
      <button
        className="bg-blue-300 text-white active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        User and score number add
      </button>
      {showModal ? (
        <div>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold text-slate-600">
                    User Info
                  </h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-slate-600 text-sm font-bold mb-1">
                      Enter User Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className="block text-slate-600 text-sm font-bold mb-1">
                      Enter Score user
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      name="score"
                      onChange={(e) => setUserscore(e.target.value)}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={(e) => {
                      handleAddUserProps(e);
                      setShowModal(false);
                    }}
                  >
                    Save user
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Modal;
