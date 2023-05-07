import { NonceManager } from 'ethers'
import { styled } from '..'

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

  input: {
    padding: '0.5rem',
    marginBottom: '0.5rem',
    width: '25%',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px'
  },

  h1: {
    color: '000',
    width: '25%',
    padding: '0.5rem',
  },

  button: {
    width: '15%',
    padding: '1rem',
    backgroundColor: '#e1e1e1',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  },

  'button:hover': {
    backgroundColor: '#ccc',
  }
})