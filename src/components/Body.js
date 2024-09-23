import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
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

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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
      <div className="flex items-center">
        <div className="search p-2 m-2">
          <input
            type="text"
            className="border border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            data-testid="search-input"
          ></input>
          <button
            className="px-2 bg-orange-600 m-2"
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
            className="filter-btn px-2 bg-blue-600 m-2"
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
      <div className="flex flex-wrap  ">
        {filteredListOfRestaurants.map((restaurant) => (
          <Link
            className="rest-link"
            key={restaurant.item.id}
            to={"/menu/" + restaurant.item.code}
          >
            {restaurant.item.promoted ? (
              <RestaurantCardPromoted restData={restaurant} />
            ) : (
              <RestaurantCard restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
