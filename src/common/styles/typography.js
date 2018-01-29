import glamorous from 'glamorous'
import { Colors } from './colors'
import Spacing from './spacing'

const Sizes = {
  title: '2.3em',
  subtitle: '1.3em'
}

const Title = glamorous.h1(
  {
    fontSize: Sizes.title,
    color: 'white',
    marginTop: 0,
    marginBottom: Spacing.tinySpacing
  },
  props => ({
    color: props.color
  })
)

const Subtitle = glamorous.h2({
  color: Colors.SubtleTextColor,
  fontWeight: '700',
  marginTop: 0,
  marginBottom: Spacing.tinySpacing
})

const Type = {}

Type.Title = Title
Type.Subtitle = Subtitle
Type.Sizes = Sizes

export default Type
