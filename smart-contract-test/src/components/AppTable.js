import React, { useState, useEffect } from "react";
import { Table, TableContainer } from "../styles/components/AppTableStyled";
import { CaretDown } from 'phosphor-react'

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
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th><span>Empresa<CaretDown size={16}/></span></th>
                <th><span>% Quitação Mensal<CaretDown size={16}/></span></th>
                <th><span>Valor do Empréstimo<CaretDown size={16}/></span></th>
                <th><span>% Juros Mensal<CaretDown size={16}/></span></th>
                <th><span>Saldo Devedor<CaretDown size={16}/></span></th>
                <th><span>Data Início<CaretDown size={16}/></span></th>
                <th><span>Data para Quitação<CaretDown size={16}/></span></th>
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
          </Table>
        </TableContainer>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
