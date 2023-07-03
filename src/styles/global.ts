import { globalCss } from './'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: 'Nunito',
  },

  'select, input, textarea': {
    fontFamily: 'Nunito',
    fontWeight: 400,
  },
  
  img: {
    maxWidth: '100%',
    height: 'auto'
  }
})