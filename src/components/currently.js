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
        After years of immersing myself within product teams consulting at&nbsp;<TextLink
          color={'#b798b1'}
          href="http://robinpowered.com"
        >
          thoughtbot
        </TextLink>{' '}
        and{' '}
        <TextLink color={'#b798b1'} href="http://robinpowered.com">
          MojoTech
        </TextLink>,{' '}
        <em>
          I missed the ability focus and practice my craft on a single platform.
        </em>
      </Styles.Type.Body>

      <Styles.Type.Body color={'#b798b1'}>
        My day to day consists of:
      </Styles.Type.Body>

      <ul>
        <Styles.Type.ListItem color={'#b798b1'}>
          Working closely with my design team ensuring initiatives are being
          created and brought to market.
        </Styles.Type.ListItem>
        <Styles.Type.ListItem color={'#b798b1'}>
          Creating organization across visual directions to create design
          consistency across each product in the platform.
        </Styles.Type.ListItem>
        <Styles.Type.ListItem color={'#b798b1'}>
          Create communication channels with product managers to ensure designs
          are hitting quarterly goals.
        </Styles.Type.ListItem>
        <Styles.Type.ListItem color={'#b798b1'}>
          Experimenting with processes to bridge designer / developer hand off
        </Styles.Type.ListItem>
        <Styles.Type.ListItem color={'#b798b1'}>
          Facilitating design sprints with designers, developers and product
          managers &mdash; <em>Build the right thing, at the right time.</em>
        </Styles.Type.ListItem>
        <Styles.Type.ListItem color={'#b798b1'}>
          Mentoring the design team to effectively convey design goals,
          addressing pushback from product, prioritizing tasks and other design
          related processes.
        </Styles.Type.ListItem>
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

const ListItem = glamorous(Styles.Type.Body)(props => ({
  color: props.color,
  marginBottom: props.marginBottom
}))

const TextLink = glamorous.a(
  {
    color: '#fff'
  },
  ({ color }) => ({
    color: color
  })
)

export default Currently
