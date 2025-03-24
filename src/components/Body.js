import { useState , useEffect, use} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[Search,setSearch] =useState("");

  // whenever state variables update, react re-renders the component
useEffect(()=>{
fetchData();
},[]);
const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=34.0836708&lng=74.7972825&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
    
const json= await data.json();

console.log(json);


//optional chaining
setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
//conditional rendering
//if (listOfRestaurants.length == 0){
//return <Shimmer />;

  return listOfRestaurants.length == 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
      <div className="search">
      <input type="text" className="search-box"  value={Search} onChange={ (e)=>
       { setSearch(e.target.value);
      } }/>
      <button onClick={()=>
        {  
          console.log(Search);

          const filteredRestaurant =listOfRestaurants.filter((res)=>
            res.info.name.toLowerCase().includes(Search.toLowerCase()));
          setListOfRestaurants(filteredRestaurant);
        }
      }>search</button>
      </div>
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