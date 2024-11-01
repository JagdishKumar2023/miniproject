import { useEffect, useState } from "react";

const Pagination = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 10;

  const APIURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(APIURL);
      const data = await response.json();
      setUserData(data);
      setTotalPages(Math.ceil(data.length / itemsPerPage)); // Calculate total pages
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = userData.slice(startIndex, endIndex);

  return (
    <div className="wrapContainer">
      <p>Learn coding</p>
      {itemsToDisplay && itemsToDisplay.length > 0 ? (
        itemsToDisplay.map((ele, index) => (
          <div key={ele.id}>
            <h3>
              {startIndex + index + 1} {ele.title}
            </h3>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}

      <div className="pagination-controls">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          &laquo; Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            onClick={() => handlePageChange(i + 1)}
            key={i}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
