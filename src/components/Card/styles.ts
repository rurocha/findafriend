import { styled } from "@styles/index";


export const Card = styled('article', {
  padding: 3,
  backgroundColor: '$white',
  borderRadius: 20,
  cursor: 'pointer',
  transition: 'background-color 0.5s ease',
  '&:hover': {
    backgroundColor: '$blue100',

    'span': {
      color: '$white'
    }
  }
})

export const Header = styled('header', {
 
})
export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  padding: '32px 0 17px 0',
})

export const Label = styled('span', {
  color: '$blue100',
  fontWeight: 700,
  transition: 'color 0.5s ease',
})