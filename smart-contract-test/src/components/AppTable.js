import React, { useState, useEffect } from "react";
import { Table, TableContainer } from "../styles/components/AppTableStyled";
import { CaretDown } from 'phosphor-react'

import jsonData from "./file.json";

export default function AppTable() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setResults(jsonData);
    setLoading(false);
  }, []);

  return (
    <>
      {results ? (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th><span>Empresa<CaretDown size={16} /></span></th>
                <th><span>Valor do empréstimo<CaretDown size={16} /></span></th>
                <th><span>Juros Mensal %<CaretDown size={16} /></span></th>
                <th><span>% de Faturamento<CaretDown size={16} /></span></th>

              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{result.empresa}</td>
                  <td>{result.valor_emprestimo}</td>
                  <td>{result.juros_mensal}</td>
                  <td>{result.porcentagem_faturamento}</td>

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
