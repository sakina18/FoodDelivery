import { useState , useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

useEffect(()=>{
fetchData();
},[]);
const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=34.0836708&lng=74.7972825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
    
const json= await data.json();

console.log(json);

setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
};
if(listOfRestaurants == null){
  return <h1>loading...</h1>;
}
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=> {
          const filteredList=listOfRestaurants.filter(
            (res)=>res.info.avgRating>4
          )
          setListOfRestaurants(filteredList);
        }}
        >Top Rated Restaurants</button>
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