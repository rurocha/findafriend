import { styled } from "@styles/index";

export const Select = styled('select', {
  width: '100%',
  padding: 14,
  borderRadius: 20,
  border: 'none',
  backgroundColor: '$red200',
  color: '$white',
  height: 60,
  fontWeight: 800,
  variants: {
    outlined: {
      true: {
        backgroundColor: 'transparent',
        border: 'solid 1px $white',
      }
    }
  },
})

export const Option = styled('option', {
  background: '$white',
  color: '$blue100'
})