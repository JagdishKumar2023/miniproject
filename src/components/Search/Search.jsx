import { useState } from "react";

function SearchComponent() {
  // Sample data
  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Pineapple",
    "Mango",
    "Grapes",
    "Banana",
    "Apple",
    "Strawberry",
    "Avocado",
    "Pineapple",
    "Watermelon",
    "Mango",
    "Kiwi",
    "Orange",
    "Berry",
    "Blueberry",
    "Cherry",
    "Lemon",
    "Apricot",
    "Figs",
    "Plum",
  ];

  // State for the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered items based on the search query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mainContainer">
      <h2>Search Items</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
