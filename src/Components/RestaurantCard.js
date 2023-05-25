import {CDN_URL} from "../utils/constants"


const ResturantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, deliveryTime } = resData?.data;
    // console.log(props);
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            resData.data.cloudinaryImageId
          }
        />
        <div>{name}</div>
        <div>{cuisines.join(",")}</div>
        <div>{avgRating}</div>
        <div>{deliveryTime} min</div>
      </div>
    );
  };
  export default ResturantCard;