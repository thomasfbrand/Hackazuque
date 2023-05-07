import { styled } from '..'

export const TableContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '75%',
  margin: '3rem auto 0 auto',
  tableLayout: 'auto',
})

export const Table = styled("table", {
  borderCollapse: "collapse",
  width: "100%",


  th: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    padding: "8px",
    textAlign: "center",
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',

    fontSize: '0.8rem',

    span: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      position: "relative",

      "::before": {
        content: "''",
        display: "inline-block",
        width: "16px",
        height: "16px",
        background: "#333",
        borderRadius: "50%",
        position: "absolute",
        left: "-24px",
      },
    },
  },

  td: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
    verticalAlign: 'middle',
    textAlign: 'center',
    fontSize: '1.225rem'
  },

  "tbody tr:nth-child(even)": {
    backgroundColor: "#f2f2f2",
  },
});