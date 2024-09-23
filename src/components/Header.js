import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { LoggedinUser } = useContext(UserContext);
  const [loginText, setLoginText] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  const handleLogin = () => {
    loginText === "Login" ? setLoginText("Logout") : setLoginText("Login");
  };

  return (
    <div className="flex justify-between shadow-lg bg-pink-100">
      <img
        className="w-[150px]"
        src="https://img.freepik.com/premium-vector/courier-bike-logo-icon-design_658271-1412.jpg?w=740"
      ></img>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status:
            {useOnlineStatus() ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <li className="px-4">
            <button onClick={handleLogin}>{loginText}</button>
          </li>
        </ul>
        <div className="pr-4">{LoggedinUser}</div>
      </div>
    </div>
  );
};

export default Header;
