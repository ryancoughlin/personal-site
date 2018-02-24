import glamorous from 'glamorous'
import { Colors } from './colors'
import Spacing from './spacing'

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const Content = glamorous.div({
  maxWidth: 620,
  width: '100%',
  margin: '0 auto',
  padding: '0 16px'
})

const Inner = glamorous.div(
  {
    paddingTop: 80,
    paddingBottom: 80,
    [mediaQueries.phone]: {
      paddingTop: 30,
      paddingBottom: 30
    }
  },
  ({ backgroundColor }) => ({
    backgroundColor: backgroundColor
  })
)

const Containers = {}

Containers.Inner = Inner
Containers.Content = Content

export default Containers
