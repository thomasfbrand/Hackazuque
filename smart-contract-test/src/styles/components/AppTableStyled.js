import { styled } from '..'

export const TableContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '75%',
  margin: '3rem auto 0 auto',
})

export const Table = styled("table", {
  borderCollapse: "collapse",
  width: "100%",
  borderRadius: '10px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  tableLayout: 'auto',


  th: {
    backgroundColor: "#f2f2f2",
    fontWeight: "bold",
    padding: "8px",
    textAlign: "center",
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    width: '14,28%',
    /* border: '1px solid #ccc', */

    '&:first-child': {
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
    '&:last-child': {
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
    },


    fontSize: '0.8rem',

    span: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
    padding: "1rem",
    borderBottom: "1px solid #ddd",
    verticalAlign: 'middle',
    textAlign: 'center',
    fontSize: '1.225rem',
    width: '14,28%',
    /* border: '1px solid #ccc', */
    '&:first-child': {
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
    '&:last-child': {
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
    },
  },

  "td:not(:last-child)": {
    position: "relative",
    padding: "8px",
    height: "50%",
    boxSizing: "border-box",
    textAlign: "center",
    verticalAlign: "middle",
    borderBottom: "1px solid #ddd",
    
    "&::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: 0,
      height: "50%",
      width: "1px",
      backgroundColor: "#ccc",
      transform: "translateY(-50%)",
    }
  },

  "tbody tr:nth-child(even)": {
    backgroundColor: "#f2f2f2",
  },
})