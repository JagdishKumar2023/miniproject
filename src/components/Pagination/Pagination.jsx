import { useEffect, useState } from "react";

const Pagination = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  //   console.log(totalPages);

  const APIURL = "https://jsonplaceholder.typicode.com/posts";

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(APIURL);
      const data = await response.json();
      setUserData(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage)); // Calculate total pages
    };

    fetchData();
  }, []); // Empty dependency array to run only on mount

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the data to be displayed on the current page
  const indexOfLastItem = currentPage * itemsPerPage; // Index of the last item on current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Index of the first item on current page
  const currentItems = userData.slice(indexOfFirstItem, indexOfLastItem); // Items for the current page

  //   console.log(indexOfLastItem);

  return (
    <div>
      <p>Learn Pagination</p>
      {currentItems.length > 0 ? (
        currentItems.map((item) => (
          <h3 key={item.id}>
            {item.id} {item.title}
          </h3>
        ))
      ) : (
        <p>No data available</p>
      )}

      {/* Pagination Controls */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1} // Disable button if it is the current page
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
