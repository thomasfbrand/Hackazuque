import React, { useState } from "react";
import MaterialTable from "material-table";
import tableIcons from "./TableIcons.js";

export default function AppTable() {
  const [results, setResults] = useState();
  const [startOnPage, setStartOnPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [startPageState, setStartPageState] = useState({
    initialPage: startOnPage,
    hasInitialPageChanged: false
  });

  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(jsonData => {
          setStartOnPage(3);
          setResults(jsonData);
          setLoading(false);
        });
    }, 2500);
  }, []);

  React.useEffect(() => {
    setStartPageState({
      initialPage: startOnPage,
      hasInitialPageChanged: true
    });
  }, [startOnPage]);

  return (
    <>
      <pre>{JSON.stringify(startPageState, null, 2)}</pre>
      {results ? (
        <MaterialTable
          key={"primary_" + Date.now()}
          data={results}
          title="My Table"
          isLoading={loading}
          columns={[
            {
              title: "User ID",
              field: "userId"
            },
            {
              title: "Record ID",
              field: "id"
            },
            {
              title: "Title",
              field: "title"
            },
            {
              title: "Completed",
              field: "completed",
              type: "boolean"
            }
          ]}
          options={{
            pageSize: 10,
            initialPage: startOnPage
          }}
          icons={tableIcons}
        />
      ) : (
        <MaterialTable
          key={"placeholder_" + Date.now()}
          isLoading={loading}
          options={{
            pageSize: 10
          }}
          icons={tableIcons}
        />
      )}
    </>
  );
}
