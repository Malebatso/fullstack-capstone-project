import React from "react";

function App() {

  const searchResults = [
    {
      title: "Wooden Chair",
      category: "Furniture"
    },
    {
      title: "Coffee Table",
      category: "Furniture"
    }
  ];

  return (
    <div>
      <h1>Search Results</h1>

      <h2>Category: Furniture</h2>

      {searchResults.map((gift, index) => (
        <div key={index}>
          <h3>{gift.title}</h3>
          <p>{gift.category}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default App;