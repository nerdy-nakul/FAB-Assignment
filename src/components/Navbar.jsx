import React, { useContext } from "react";
import { AuthContext } from "../context/Auth";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div className="bg-black text-white flex justify-between items-center py-4 px-10">
      <div className="text-lg font-bold">
        THE <span className="bg-white text-black px-1">PRODUCT</span> PLATFORM
      </div>
      <div className="flex flex-row items-center gap-4">
        <div>
          {isLoggedIn ? (
            <button
              className="loginButton bg-blue-500 text-white px-4 py-2 rounded"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <button
              className="loginButton bg-blue-500 text-white px-4 py-2 rounded"
              onClick={login}
            >
              Login
            </button>
          )}
        </div>
        <div>
          <select
            name=""
            id=""
            className=" bg-transparent text-white py-2 rounded"
          >
            <option value="learn">Learn</option>
            <option value="learn">Learn</option>
          </select>
        </div>
        <div>
          <select
            name=""
            id=""
            className="bg-transparent text-white py-2 rounded"
          >
            <option value="practice">Practice</option>
            <option value="practice">Practice</option>
          </select>
        </div>
        <div className="profileImage w-10 h-10 rounded-full overflow-hidden">
          <img
            src={
              "https://res.cloudinary.com/dos2esitd/image/upload/v1718054266/uoau95rs24cxwicsqmnc.png"
            }
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
