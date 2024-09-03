import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

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
      "https://8b80e596-678e-43ae-bd09-4da0ad3baf5e.mock.pstmn.io/getAll"
    );
    const json = await data.json();

    setListOfRestaurants(json?.data);
    //console.log(listOfRestaurants);
    setFilteredListOfRestaurants(json?.data);
  };

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
          <RestaurantCard key={restaurant.position} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
