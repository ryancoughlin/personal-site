import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Styles from '../common/styles/'

const Currently = () => (
  <Styles.Containers.Loud>
    <Styles.Containers.Content>
      <SectionHeadline textColor={'#b798b1'}>
        Currently, I am building meeting room booking software.
      </SectionHeadline>

      <Styles.Type.Body textColor={'#b798b1'}>
        After years of immersing myself within product teams consulting at&nbsp;<TextLink
          textColor={'#b798b1'}
          href="http://robinpowered.com"
        >
          thoughtbot
        </TextLink>{' '}
        and{' '}
        <TextLink textColor={'#b798b1'} href="http://robinpowered.com">
          MojoTech
        </TextLink>.{' '}
        <em>
          I missed the ability focus and practice my craft on a single platform.
        </em>
      </Styles.Type.Body>

      <Styles.Type.Body textColor={'#b798b1'}>
        My day to day consists of:
      </Styles.Type.Body>

      <ul>
        <Styles.Type.ListItem textColor={'#b798b1'}>
          Working closely with my design team ensuring initiatives are being
          created and brought to market.
        </Styles.Type.ListItem>
        <Styles.Type.ListItem textColor={'#b798b1'}>
          Creating organization across visual directions to create design
          consistency across each product in the platform.
        </Styles.Type.ListItem>
        <Styles.Type.ListItem textColor={'#b798b1'}>
          Create communication channels with product managers to ensure designs
          are hitting quarterly goals, validated solving problems and
          prioritizing the right tasks.
        </Styles.Type.ListItem>
        <Styles.Type.ListItem textColor={'#b798b1'}>
          Facilitating design sprints with designers, developers and product
          managers &mdash; <em>Build the right thing, at the right time.</em>
        </Styles.Type.ListItem>
        <Styles.Type.ListItem textColor={'#b798b1'}>
          Mentoring the design team to help effectively convey the goal of their
          design and what problem it is trying to solve, addressing pushback
          from product, prioritizing daily and quarterly tasks, and overall
          design process.
        </Styles.Type.ListItem>
      </ul>
    </Styles.Containers.Content>
  </Styles.Containers.Loud>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 640px)'
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
  ({ textColor }) => ({
    color: textColor
  })
)

const ListItem = glamorous(Styles.Type.Body)(props => ({
  color: props.textColor,
  marginBottom: props.marginBottom
}))

const TextLink = glamorous.a(
  {
    color: '#fff'
  },
  ({ textColor }) => ({
    color: textColor
  })
)

export default Currently
