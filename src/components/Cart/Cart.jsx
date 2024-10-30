import { useState } from "react";
import { food_list } from "../../assets/assets";

const Cart = () => {
  const [sortOrder, setSortOrder] = useState("Price low to high");

  const sortingFoodList = [...food_list].sort((a, d) => {
    if (sortOrder === "Price low to high") {
      return a.price - d.price;
    } else if (sortOrder === "Price high to low") {
      return d.price - a.price;
    } else if (sortOrder === "Price to high to low") {
      return (a.rating_starts || 0) - (d.rating_starts || 0); // Sort by rating low to high
    } else if (sortOrder === " Price to low to high") {
      return (d.rating_starts || 0) - (a.rating_starts || 0); // Sort by rating high to low
    }
    return 0;
  });

  const handleSortChange = (e) => {
    setSortOrder(e.target.value); // Update sort order state
    console.log(e.target.value);
  };

  return (
    <div className="mainContainer">
      <div>
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="Price low to high">Price low to high</option>
          <option value="Price high to low">Price high to low</option>
          <option value="Price low to high">Rating low to high</option>
          <option value="Price high to low">Rating high to low</option>
        </select>
      </div>

      {sortingFoodList.map((ele, id) => (
        <div key={id}>
          <h2>{ele.name}</h2>
          <img src={ele.image} alt={`Image of ${ele.name}`} />
          <p>{`Price: ${ele.price.toFixed(2)}`}</p>
          <p>{ele.description}</p>
          <p>{ele.category}</p>
          <p> ${ele.rating_starts}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
