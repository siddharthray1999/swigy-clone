import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Header from "./Header";
import Shimmer from "./Shimmer"
const RestrauntMenu = () => {
  //how to read a dynamic URL params
  const {resId} = useParams();
  // console.log(redId);

  const [resData, setResData] = useState(null);
  

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo (){
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5772681&lng=77.2245284&restaurantId=" + resId);
    const json = await data.json();
    console.log(json);
    setResData(json.data.cards[0].card.card.info);
  }
  return(!resData) ? <Shimmer/> : (
    <div>
      <Header />
      <h1>restrant id :{resId}</h1>
      <h1>{resData.name}</h1>
      <img src={CDN_URL + resData.cloudinaryImageId} />
      <h5>{resData.avgRating}</h5>
      <h5>{resData.city}</h5>
      <h5>{resData.cuisines.join(",")}</h5>
    </div>
  );
};  

export default RestrauntMenu;
