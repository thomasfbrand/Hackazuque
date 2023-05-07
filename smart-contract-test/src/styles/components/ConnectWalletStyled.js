import { styled } from '..'

export const ConnectButtonStyled = styled('button', {
  border: 'none',
  padding: '0.8rem',
  backgroundColor: '#c3c3c3',
  marginTop: '2rem',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',

  '&:hover': {
    backgroundColor: '#a6a6a6'
  }
})