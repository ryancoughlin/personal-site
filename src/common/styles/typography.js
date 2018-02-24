import glamorous from 'glamorous'
import { Colors } from './colors'
import Spacing from './spacing'
import listArrow from '../../assets/images/list-arrow-light.svg'

const mediaQueries = {
  phone: '@media only screen and (max-width: 640px)'
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
      fontSize: 22
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
    backgroundImage: `url(${listArrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left 10px',
    listStyleType: 'none',
    paddingLeft: 40
  },
  props => ({
    color: props.color,
    marginBottom: props.marginBottom
  })
)

const IntroHeadline = glamorous(SectionHeadline)({
  fontSize: 66
})

const Type = {}

Type.Body = Body
Type.IntroHeadline = IntroHeadline
Type.SectionHeadline = SectionHeadline
Type.ListItem = ListItem

export default Type
