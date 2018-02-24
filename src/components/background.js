import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Styles from '../common/styles/'

const Background = () => (
  <Styles.Containers.Inner>
    <Styles.Containers.Content>
      <Styles.Type.SectionHeadline>
        As far as my background...
      </Styles.Type.SectionHeadline>
      <Styles.Type.Body>
        I was raised in a small coastal town in Maine. I&apos;ve always had a
        love of the great outdoors and being on the water. Hiking, fly
        fishing—you name it, I do it. My love for the outdoors and New England
        is where my interest for design started. I love what I do... If you’d
        like to chat about how my passion for launching products and growing
        your brand identity could benefit your team, reach out.
      </Styles.Type.Body>

      <Styles.Type.Body>
        I’ve worked with teams designing awesome apps for the last XX years. And
        I’ve noticed that our best apps were those that we put the finishing
        polish into.
        <HighlightText>
          It’s often the last 20% of a products refinement takes it from good to
          great.
        </HighlightText>
      </Styles.Type.Body>

      <Styles.Type.Body>
        Without ame los doubt, I can say this from my own experience as well.
        Because not only is app design a job I love, but it’s my passionate
        hobby as well. I’ve even spent much of my free time creating my own
        apps.
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
