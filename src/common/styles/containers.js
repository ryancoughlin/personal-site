import glamorous from 'glamorous'
import { Colors } from './colors'
import Spacing from './spacing'

const mediaQueries = {
  phone: '@media only screen and (max-width: 640px)'
}

const Content = glamorous.div({
  maxWidth: 680,
  width: '100%',
  margin: '0 auto',
  padding: '0 16px'
})

const Loud = glamorous.div(
  {
    backgroundColor: '#36082d',
    paddingTop: 60,
    paddingBottom: 60
  },
  ({ backgroundColor }) => ({
    backgroundColor: backgroundColor
  })
)

const Containers = {}

Containers.Loud = Loud
Containers.Content = Content

export default Containers
