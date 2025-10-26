import React, { useState } from "react";

const products = [
  { id: 1, name: "1.Laptop" },
  { id: 2, name: "2.Mobile" },
  { id: 3, name: "3.Tablet" },
  { id: 4, name: "4.Headphone" },
  { id: 5, name: "5.Keyboard" },
  { id: 6, name: "6.Mouse" },
  { id: 7, name: "7.Camera" },
  { id: 8, name: "8.Speaker" },
  { id: 9, name: "9.Smartwatch" },
  { id: 10, name: "10.Printer" }
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Pagination Logic
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🛍️ Products List</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentProducts.map((p) => (
          <li key={p.id} style={{ margin: "10px 0", fontSize: "18px" }}>
            {p.name}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ◀ Previous
        </button>

        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}

export default App;
