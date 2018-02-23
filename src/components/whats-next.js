import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Currently from '../components/currently'
import Styles from '../common/styles/'

const WhatsNext = () => (
  <Styles.Containers.Loud backgroundColor={'#ffd14e'}>
    <Styles.Containers.Content>
      <SectionHeadline>
        What&apos;s next & <br /> roles that excite me
      </SectionHeadline>
      <Styles.Type.Body>
        I’ve learned something as a designer that means the difference between a
        team collaborating smoothly and creating an awesome app or not… and that
        is passion. When every member of your team is passionate about
        contributing their expertise to the success of an app, the end result is
        a much better product.
      </Styles.Type.Body>
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

const TextLink = glamorous.a(
  {
    color: '#fff'
  },
  ({ textColor }) => ({
    color: textColor
  })
)

export default WhatsNext
