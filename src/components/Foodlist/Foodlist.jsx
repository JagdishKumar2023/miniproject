import { useState } from "react";
import { food_list } from "../../assets/assets.js";

const Foodlist = () => {
  // Single state to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("");
  //   console.log(selectedCategory);

  // Filter the food list based on the selected category
  const filteredFoodList = food_list.filter((ele) => {
    if (selectedCategory === "South Indian" && ele.type === "South Indian")
      return true;
    if (selectedCategory === "North Indian" && ele.type === "North Indian")
      return true;
    if (selectedCategory === "Contiental" && ele.type === "Contiental")
      return true;
    return selectedCategory === ""; // Show all if no filter is selected
  });
  //   console.log(filteredFoodList);

  return (
    <div className="foodContainer">
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategory === "South Indian"}
            onChange={() =>
              setSelectedCategory(
                selectedCategory === "South Indian" ? "" : "South Indian"
              )
            }
          />
          Show South Indian
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedCategory === "North Indian"}
            onChange={() =>
              setSelectedCategory(
                selectedCategory === "North Indian" ? "" : "North Indian"
              )
            }
          />
          Show North Indian
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedCategory === "Contiental"}
            onChange={() =>
              setSelectedCategory(
                selectedCategory === "Contiental" ? "" : "Contiental"
              )
            }
          />
          Show Continental
        </label>
      </div>

      {filteredFoodList.map((ele, index) => (
        <div key={index} className="foodItem">
          <h2>{ele.name}</h2>
          <img src={ele.image} alt={ele.name} />
          <p>{ele.description}</p>
          <p>{ele.category}</p>
          <p>{ele.rating_starts}</p>
          <p>{ele.food_area}</p>
        </div>
      ))}
    </div>
  );
};

export default Foodlist;
