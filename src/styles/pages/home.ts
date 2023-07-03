import { styled } from '..'

export const Page = styled('div', {
  backgroundColor: '$red100',
  height: '100vh'
})

export const Container = styled('div', {
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 16px',

  '@aboveDesktop': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 48,
  }
})

export const LogoContainer = styled('div', {
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  '& span': {
    color: '$white',
    fontWeight: 600,
  },

  '@aboveMobile': {
    flex: 1,
  }
})

export const ContentHeading = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@aboveDesktop': {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end'
  }
})

export const Heading = styled('h1', {
  color: '$white',
  fontSize: 72,
  letterSpacing: -1.44,
  marginBottom: 32,
  lineHeight: '90%',
  maxWidth: 487,

  '@aboveDesktop': {
    margin: 0,
    fontSize: 72,
    maxWidth: 487,
  }
})

export const Footer = styled('footer', {
  '@aboveDesktop': {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
})

export const Subtitle = styled('p', {
  fontSize: 24,
  fontWeight: 600,
  maxWidth: 407,
  color: '$white',
})

export const SearchContainer = styled('div', {
  '@aboveDesktop': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& span': {
      color: '$white',
      marginRight: 23,
    }
  }
})

export const UfSelectContainer = styled('div', {
  '@aboveDesktop': {
    maxWidth: 72,
    marginRight: 10,
  }
})

export const StateSelectContainer = styled('div', {
  '@aboveDesktop': {
    width: 280,
    marginRight: 32,
  }
})

