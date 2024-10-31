// import { useState } from "react";
// import { food_list } from "../../assets/assets.js";

// const Foodlist = () => {
//   // Single state to track the selected category
//   const [selectedCategory, setSelectedCategory] = useState("");
//   //   console.log(selectedCategory);

//   // Filter the food list based on the selected category
//   const filteredFoodList = food_list.filter((ele) => {
//     if (selectedCategory === "South Indian" && ele.type === "South Indian")
//       return true;
//     if (selectedCategory === "North Indian" && ele.type === "North Indian")
//       return true;
//     if (selectedCategory === "Contiental" && ele.type === "Contiental")
//       return true;
//     return selectedCategory === ""; // Show all if no filter is selected
//   });

//   //   console.log(filteredFoodList);

//   const categories = ["South Indian", "North Indian", "Contiental"];
//   return (
//     <div className="foodContainer">
//       <div>
//         {categories.map((category) => (
//           <label key={category}>
//             <input
//               type="checkbox"
//               checked={selectedCategory === "South Indian"}
//               onChange={() =>
//                 setSelectedCategory(
//                   selectedCategory === selectedCategory ? "" : { category }
//                 )
//               }
//             />
//             {category}
//           </label>
//         ))}

//         {/* <label>
//           <input
//             type="checkbox"
//             checked={selectedCategory === "South Indian"}
//             onChange={() =>
//               setSelectedCategory(
//                 selectedCategory === "South Indian" ? "" : "South Indian"
//               )
//             }
//           />
//           Show South Indian
//         </label> */}
//         {/* <label>
//           <input
//             type="checkbox"
//             checked={selectedCategory === "North Indian"}
//             onChange={() =>
//               setSelectedCategory(
//                 selectedCategory === "North Indian" ? "" : "North Indian"
//               )
//             }
//           />
//           Show North Indian
//         </label> */}
//         {/* <label>
//           <input
//             type="checkbox"
//             checked={selectedCategory === "Contiental"}
//             onChange={() =>
//               setSelectedCategory(
//                 selectedCategory === "Contiental" ? "" : "Contiental"
//               )
//             }
//           />
//           Show Contiental
//         </label> */}
//       </div>
//       {/* /dry - don't repeat yourself */}
//       {filteredFoodList.map((ele, index) => (
//         <div key={index} className="foodItem">
//           <h2>{ele.name}</h2>
//           <img src={ele.image} alt="" />
//           <p>{ele.description}</p>
//           <p>{ele.category}</p>
//           <p>{ele.rating_starts}</p>
//           <p>{ele.food_area}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Foodlist;

import { useState } from "react";
import { food_list } from "../../assets/assets.js";

const Foodlist = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Filter the food list based on the selected category
  const filteredFoodList = food_list.filter((ele) => {
    if (selectedCategory === "") return true; // Show all if no category is selected
    return ele.type === selectedCategory; // Show only the selected category
  });

  // Correct spelling in categories list
  const categories = ["South Indian", "North Indian", "Contiental"]; // Fixed spelling of "Continental"

  const handleCategoryChange = (category) => {
    setSelectedCategory(
      (prevCategory) => (prevCategory === category ? "" : category) // Deselect if it's already selected, otherwise select it
    );
  };

  return (
    <div className="foodContainer">
      <div>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategory === category} // Checks if the current category is the selected category
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      {filteredFoodList.map((ele, index) => (
        <div key={index} className="foodItem">
          <h2>{ele.name}</h2>
          <img src={ele.image} alt="" />
          <p>{ele.description}</p>
          <p>{ele.type}</p>
          <p>{ele.rating_starts}</p>
          <p>{ele.food_area}</p>
        </div>
      ))}
    </div>
  );
};

export default Foodlist;
