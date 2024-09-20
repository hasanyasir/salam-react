import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const { LoggedinUser } = useContext(UserContext);

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
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
        <div className="pr-4">{LoggedinUser}</div>
      </div>
    </div>
  );
};

export default Header;
