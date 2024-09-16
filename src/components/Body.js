import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { REST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      //Postman mock server endpoint
      REST_API
    );
    const json = await data.json();

    setListOfRestaurants(json?.data);

    setFilteredListOfRestaurants(json?.data);
    //console.log(listOfRestaurants);
  };

  const isOnline = useOnlineStatus();

  if (isOnline === false)
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const newList = listOfRestaurants.filter((rest) =>
                rest.item.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(newList);
            }}
          >
            Search
          </button>
        </div>

        <div className="filter-inner">
          <button
            className="filter-btn"
            onClick={() => {
              const filterdList = listOfRestaurants.filter(
                (rest) => rest.item.avgRating >= 4.0
              );
              setFilteredListOfRestaurants(filterdList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="rest-container">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            className="rest-link"
            key={restaurant.item.id}
            to={"/menu/" + restaurant.item.code}
          >
            <RestaurantCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
