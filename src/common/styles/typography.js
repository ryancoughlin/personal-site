import glamorous from 'glamorous'
import { Colors } from './colors'
import Spacing from './spacing'
import listArrow from '../../assets/images/list-arrow-light.svg'

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const bodyFontFamily = 'Lora'
const headerFontFamily = '"Oswald", sans-serif'

const typeSizes = {
  title: '2.3em',
  subtitle: '1.3em',
  body: 20
}

const baseTextStyle = {
  fontFamily: bodyFontFamily,
  fontSize: typeSizes.body,
  color: '#36082d',
  lineHeight: 1.64,
  marginBottom: 40,
  [mediaQueries.phone]: {
    fontSize: 16,
    marginBottom: 22
  }
}

const SectionHeadline = glamorous.h2(
  {
    fontSize: 38,
    fontFamily: headerFontFamily,
    textTransform: 'uppercase',
    color: '#36082d',
    lineHeight: 1.3,
    [mediaQueries.phone]: {
      fontSize: 26
    }
  },
  props => ({
    fontSize: props.fontSize,
    color: props.color,
    marginBottom: props.marginBottom
  })
)

const Body = glamorous.p(
  {
    ...baseTextStyle
  },
  props => ({
    color: props.color,
    marginBottom: props.marginBottom
  })
)

const ListItem = glamorous.li(
  {
    ...baseTextStyle,
    listStyleType: 'none',
    paddingLeft: 40,
    position: 'relative',
    '&::after': {
      content: '→',
      position: 'absolute',
      top: -1,
      fontSize: 22,
      left: 0,
      [mediaQueries.phone]: {
        top: -4
      }
    },
    ':last-of-type': {
      marginBottom: 0
    },
    [mediaQueries.phone]: {
      paddingLeft: 32,
      fontSize: 16,
      marginBottom: 24
    }
  },
  props => ({
    color: props.color,
    marginBottom: props.marginBottom
  })
)

const IntroHeadline = glamorous(SectionHeadline)({
  fontSize: 62,
  [mediaQueries.phone]: {
    fontSize: 32
  }
})

const Type = {}

Type.Body = Body
Type.IntroHeadline = IntroHeadline
Type.SectionHeadline = SectionHeadline
Type.ListItem = ListItem

export default Type
