import glamorous from 'glamorous'
import { Colors } from './colors'
import Spacing from './spacing'

const mediaQueries = {
  phone: '@media only screen and (max-width: 640px)'
}

const typeSizes = {
  title: '2.3em',
  subtitle: '1.3em',
  body: 20
}

const baseTextStyle = {
  fontFamily: 'Lora',
  fontSize: typeSizes.body,
  color: '#36082d',
  lineHeight: 1.64,
  marginBottom: 40,
  [mediaQueries.phone]: {
    fontSize: 16,
    marginBottom: 22
  }
}

const BaseHeadline = glamorous.h2(
  {
    fontSize: 36,
    fontFamily: '"Oswald", sans-serif',
    textTransform: 'uppercase',
    color: '#36082d',
    lineHeight: 1.3,
    [mediaQueries.phone]: {
      fontSize: 22
    }
  },
  props => ({
    fontSize: props.fontSize,
    textColor: props.textColor,
    marginBottom: props.marginBottom
  })
)

const Body = glamorous.p(
  {
    ...baseTextStyle
  },
  props => ({
    color: props.textColor,
    marginBottom: props.marginBottom
  })
)

const ListItem = glamorous.li(
  {
    ...baseTextStyle
  },
  props => ({
    color: props.textColor,
    marginBottom: props.marginBottom
  })
)

const IntroHeadline = glamorous(BaseHeadline)({
  fontSize: 66
})

const Type = {}

Type.Body = Body
Type.IntroHeadline = IntroHeadline
Type.ListItem = ListItem

export default Type
