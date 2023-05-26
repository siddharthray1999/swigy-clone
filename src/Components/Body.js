import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"
import {Link } from "react-router-dom"


const Body = () => {
  function filterData(searchText, Resturants) {
    const filterdata = Resturants.filter((restaurant) =>
      restaurant?.data?.name?.toLowercase()?.includes(searchText.toLowercase())
    );
    return filterdata;
  }

  const [allRestaurants ,setAllRestaurants] =useState([]);
  const [filteredRestaurants ,setFilteredRestaurants] =useState([])
  const [searchText, setSearchText] = useState("");

  // const [Resturants, setRestaurants] = useState(ResturantList);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5772681&lng=77.2245284&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
console.log("render")
  if(!allRestaurants) return null;

  return allRestaurants.length === 0 ? <Shimmer/>:(
    <>
    <div className="container">
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          placeholder="search"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
       <Link to ={ "/restraunt/" + restaurant.data.id}> <RestaurantCard  resData={restaurant} /></Link> 
        ))}
      </div>
    </div>
    </div>
    </>
  );
};
export default Body;
