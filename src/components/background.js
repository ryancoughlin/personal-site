import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Styles from '../common/styles/'

const Background = () => (
  <Styles.Containers.Inner>
    <Styles.Containers.Content>
      <Styles.Type.SectionHeadline>
        Boston born, Maine raised
      </Styles.Type.SectionHeadline>
      <Styles.Type.Body>
        I grew up in a small coastal town in Maine. I&apos;ve always loved the
        great outdoors and being on the water. Hiking, fly fishing—you name it,
        I do it.
      </Styles.Type.Body>

      <Styles.Type.Body>
        In my free time, I enjoy shooting photos, tying flies, and exploring new
        water.
      </Styles.Type.Body>
    </Styles.Containers.Content>
  </Styles.Containers.Inner>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const HighlightText = glamorous.span(
  {
    fontSize: 20,
    fontFamily: '"Oswald", sans-serif',
    backgroundColor: '#ffd14e',
    textTransform: 'uppercase',
    padding: '4px 6px 2px 6px',
    marginLeft: 4,
    color: '#36082d',
    letterSpacing: '0.017em',
    [mediaQueries.phone]: {
      fontSize: 18
    }
  },
  ({ textColor, backgroundColor }) => ({
    backgroundColor: backgroundColor,
    color: textColor
  })
)

export default Background
