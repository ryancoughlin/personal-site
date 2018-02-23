import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Currently from '../components/currently'
import WhatsNext from '../components/whats-next'
import Styles from '../common/styles/'

const Home = () => (
  <Page>
    <Helmet
      title="Ryan Coughlin - Mainer, Designer an Fly Fishing Junkie"
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />
    <ContentContainer>
      <TinyHeadline>
        ryan coughlin
        <SubtleText> / Mainer, designer & fly fishing junkie</SubtleText>
      </TinyHeadline>
    </ContentContainer>

    <ContentContainer>
      <Styles.Type.IntroHeadline>
        What makes a great digital product?
      </Styles.Type.IntroHeadline>

      <Styles.Type.Body>
        I’ve been working at that for the last 10 years. And I&apos;ve found
        that all great products have one thing in common:
      </Styles.Type.Body>

      <Blockquote>
        They were built by a talented and hardworking team. Each team member
        knew the product had a specific problem it was trying to solve. From
        defining that problem with a design sprint, developing user journeys,
        and ironing out information architecture with wireframes, each element
        was carefully fashioned to accomplish that goal.
      </Blockquote>

      <SupportingHeadline>
        Hi, my name is Ryan Coughlin, and I’m a designer at&nbsp;<TextLink
          textColor={'#ec3948'}
          href="http://robinpowered.com"
        >
          robin
        </TextLink>. I figure out creative ways to make practical and innovative
        products.
      </SupportingHeadline>

      <Styles.Type.Body>
        If you’d like to see examples of my previous work, check out my
        portfolio on{' '}
        <TextLink href="http://dribbble.com/ryancoughlin" textColor={'#ea4c89'}>
          Dribbble
        </TextLink>.
      </Styles.Type.Body>
    </ContentContainer>
    <Currently />
    <WhatsNext />
    <ContentContainer>
      <SectionHeadline>As far as my background...</SectionHeadline>
      <Styles.Type.Body>
        I’ve learned something as a designer that means the difference between a
        team collaborating smoothly and creating an awesome app or not… and that
        is passion. When every member of your team is passionate about
        contributing their expertise to the success of an app, the end result is
        a much better product.
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
    </ContentContainer>
  </Page>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 640px)'
}

const Page = glamorous.div({
  borderTop: '8px solid #ffd14e',
  paddingTop: 80
})

const ContentContainer = glamorous.div({
  maxWidth: 640,
  width: '100%',
  margin: '0 auto',
  padding: '0 16px'
})

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

const SupportingHeadline = glamorous.h2(
  {
    fontSize: 24,
    marginTop: 23,
    fontFamily: '"Oswald", sans-serif',
    textTransform: 'uppercase',
    color: '#36082d',
    letterSpacing: '0.017em',
    [mediaQueries.phone]: {
      fontSize: 22
    }
  },
  ({ textColor }) => ({
    color: textColor
  })
)

const TinyHeadline = glamorous.h5({
  fontSize: 11,
  textTransform: 'uppercase',
  fontFamily: '-apple-system, "Helvetica Neue", "Lucida Grande"',
  letterSpacing: '0.06em'
})

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

const Blockquote = glamorous(Styles.Type.Body)({
  borderLeft: '6px solid #ffd14e',
  paddingLeft: 22,
  fontStyle: 'italic',
  color: '#36082d',
  marginLeft: '-28px',
  [mediaQueries.phone]: {
    marginLeft: 0
  }
})

const SubtleText = glamorous.span({
  color: '#999'
})

const TextLink = glamorous.a(
  {
    color: '#fff'
  },
  ({ textColor }) => ({
    color: textColor
  })
)

export default Home
