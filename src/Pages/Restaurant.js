import { useEffect, useState } from "react";
import Header from "./Header";
import "../CSS/Restaurant.css";
import Breakfasts from "../component/Breakfasts";

function Restaurant() {
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    fetch("restaurant").then((data) => setRestaurant(data));
  }, []);

  return (
    <div className="restaurant-body">
      <Breakfasts restaurant={restaurant} />
    </div>
  );
}

export default Restaurant;
