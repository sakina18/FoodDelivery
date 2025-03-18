import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(  [
   {info:{
    id: "43836", 
    name: "McDonald's",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
    locality: "MG Road",
    areaName: "Ashok Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    avgRating: 4.4,
    parentId: "630",
    avgRatingString: "4.4",
    totalRatingsString: "25K+"}},
    {info: { id: "43846",
      name: "albaik",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/5e7991d9-6a0d-4034-82a9-59bd2bbdc0b3_43836.jpg",
      locality: "MG Road",
      areaName: "Ashok Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 3.4,
      parentId: "630",
      avgRatingString: "3.4",
      totalRatingsString: "25K+"}}]
  );
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=> {
          const filteredList=listOfRestaurants.filter(
            (res)=>res.info.avgRating>4
          )
          setListOfRestaurants(filteredList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
