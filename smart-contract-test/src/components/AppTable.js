import React, { useState, useEffect } from "react";

export default function AppTable() {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(jsonData => {
          setResults(jsonData);
          setLoading(false);
        });
    }, 2500);
  }, []);

  return (
    <>
      {results ? (
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Record ID</th>
              <th>Title</th>
              <th>Completed</th>
              <th>Subject 1</th>
              <th>Subject 2</th>
              <th>Subject 3</th>
            </tr>
          </thead>
          <tbody>
            {results.map((result, index) => (
              <tr key={index}>
                <td>{result.userId}</td>
                <td>{result.id}</td>
                <td>{result.title}</td>
                <td>{result.completed ? "Yes" : "No"}</td>
                <td>Subject 1</td>
                <td>Subject 2</td>
                <td>Subject 3</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
