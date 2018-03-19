import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Styles from '../common/styles/'

const Currently = () => (
  <Styles.Containers.Inner backgroundColor={'#36082d'}>
    <Styles.Containers.Content>
      <Styles.Type.SectionHeadline color={'#b798b1'}>
        Currently, I am building meeting room booking software.
      </Styles.Type.SectionHeadline>

      <Styles.Type.Body color={'#b798b1'}>
        My day-to-day consists of:
      </Styles.Type.Body>

      <ul>
        <ListItem color={'#b798b1'}>
          Closely working with the design team to inspire new ideas and bring
          them to market
        </ListItem>
        <ListItem color={'#b798b1'}>
          Ensuring visual and product design consistency across each product
          within the platform
        </ListItem>
        <ListItem color={'#b798b1'}>
          Creating communication channels with product team to ensure designs
          are hitting quarterly goals
        </ListItem>
        <ListItem color={'#b798b1'}>
          Building design systems to decrease designer / developer hand-off
        </ListItem>
        <ListItem color={'#b798b1'}>
          Facilitating design sprints with designers, developers and product
          managers &mdash; <em>Build the right thing, at the right time</em>
        </ListItem>
        <ListItem color={'#b798b1'}>
          Mentoring the design team to convey design goals, address product team
          feedback, prioritize tasks, and other design related processes
        </ListItem>
      </ul>
    </Styles.Containers.Content>
  </Styles.Containers.Inner>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const SectionHeadline = glamorous.h2(
  {
    fontSize: 36,
    marginTop: 23,
    fontFamily: '"Oswald", sans-serif',
    textTransform: 'uppercase',
    color: '#36082d',
    lineHeight: 1.3,
    [mediaQueries.phone]: {
      fontSize: 22
    }
  },
  ({ color }) => ({
    color: color
  })
)

const ListItem = glamorous(Styles.Type.ListItem)({
  marginBottom: 24
})

export default Currently
