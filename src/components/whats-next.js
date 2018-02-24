import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Currently from '../components/currently'
import Styles from '../common/styles/'
import listArrow from '../assets/images/list-arrow.svg'

const WhatsNext = () => (
  <Styles.Containers.Inner backgroundColor={'#ffd14e'}>
    <Styles.Containers.Content>
      <Headline>
        What&apos;s next <MellowYellow>&</MellowYellow> <br /> roles that excite
        me
      </Headline>
      <ul>
        <ListItem>High impact, high value projects</ListItem>
        <ListItem>Leading new product initiatives</ListItem>
        <ListItem>Collaborating with design savy front-end engineers</ListItem>
        <ListItem>Designing products with hardware integrations</ListItem>
        <ListItem>
          Redefining visual directions across products and platforms
        </ListItem>
        <ListItem>Mentoring design team members</ListItem>
        <ListItem>
          Bringing initiatives to market that are outside of quaterly goals
          &mdash; These are "20% time initiatives"
        </ListItem>
      </ul>
      <Action>
        <Body>Sound interesting?</Body>
        <Button href={'mailto:ryan@ryancoughlin.com'}>Get in Touch</Button>
      </Action>
    </Styles.Containers.Content>
  </Styles.Containers.Inner>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const Button = glamorous.a({
  fontFamily: 'Lora',
  fontSize: 20,
  color: '#36082d',
  border: '2.5px solid #36082d',
  backgroundColor: 'transparent',
  marginLeft: 24,
  paddingLeft: 24,
  paddingRight: 24,
  height: 56,
  lineHeight: 2.25,
  textAlign: 'center',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: '#36082d',
    color: 'white'
  }
})

const Headline = glamorous(Styles.Type.SectionHeadline)({
  fontSize: 56
})

const Body = glamorous(Styles.Type.Body)({
  marginBottom: 0
})

const Action = glamorous.div({
  marginTop: 100,
  display: 'flex',
  alignItems: 'center'
})

const MellowYellow = glamorous.span({
  color: '#C4A03B'
})

const ListItem = glamorous(Styles.Type.ListItem)({
  marginBottom: 16,
  [mediaQueries.phone]: {
    marginBottom: 12
  }
})

const TextLink = glamorous.a(
  {
    color: '#fff'
  },
  ({ textColor }) => ({
    color: textColor
  })
)

export default WhatsNext
