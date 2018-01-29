import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Styles from '../common/styles/'

const Home = () => (
  <Container>
    <Helmet
      title="Ryan Coughlin - Mainer, Designer an Fly Fishing Junkie"
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />
    <ContentContainer>
      <TinyHeadline>
        ryan coughlin
        <SubtleText> / Mainer, designer & fly fishing junkie.</SubtleText>
      </TinyHeadline>
    </ContentContainer>

    <ContentContainer>
      <IntroHeadline>What makes a great digital product?</IntroHeadline>

      <Body>
        I’ve been working at that for the last 10 years. And I've found that all
        great products have one thing in common:
      </Body>

      <Blockquote>
        They were created by talented and hard-working teams. Each person
        involved knew the product had a specific goal and problem to it thrived
        to solve. From function, to user flow, to visual design and everything
        in between, each element was carefully fashioned to accomplish it's
        goals.
      </Blockquote>

      <SecondaryHeadline>
        Hi, my name is Ryan Coughlin, and I’m a designer at
        <a href="http://thoughtbot.com" className="thoughtbot-link">
          thoughtbot
        </a>. I figure out creative ways to make practical, fun, and innovative
        products.
      </SecondaryHeadline>

      <Body>
        If you’d like to see examples of my previous work, check out my
        portfolio on{' '}
        <a href="http://dribbble.com/ryancoughlin" className="dribbble-link">
          Dribbble
        </a>.
      </Body>

      <Body>
        I’ve worked with teams designing awesome apps for the last XX years. And
        I’ve noticed that our best apps were those that we put the finishing
        polish into.
        <HighlightText>
          It’s often the last 20% of a products refinement takes it from good to
          great.
        </HighlightText>
      </Body>

      <Body>
        I’ve learned something as a designer that means the difference between a
        team collaborating smoothly and creating an awesome app or not… and that
        is passion. When every member of your team is passionate about
        contributing their expertise to the success of an app, the end result is
        a much better product.
      </Body>

      <Body>
        Without a doubt, I can say this from my own experience as well. Because
        not only is app design a job I love, but it’s my passionate hobby as
        well. I’ve even spent much of my free time creating my own apps.
      </Body>
    </ContentContainer>
  </Container>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 640px)'
}

const Container = glamorous.div({
  borderTop: '8px solid #ffd14e',
  paddingTop: 80
})

const ContentContainer = glamorous.div({
  maxWidth: 640,
  width: '100%',
  margin: '0 auto',
  padding: '0 16px'
})

const IntroHeadline = glamorous.h1({
  fontFamily: '"Oswald", sans-serif',
  fontSize: 66,
  textTransform: 'uppercase',
  color: '#36082d',
  lineHeight: '1.1',
  [mediaQueries.phone]: {
    fontSize: 37
  }
})

const SecondaryHeadline = glamorous.h2({
  fontSize: 26,
  marginTop: 23,
  fontFamily: '"Oswald", sans-serif',
  textTransform: 'uppercase',
  color: '#36082d',
  [mediaQueries.phone]: {
    fontSize: 22
  }
})

const TinyHeadline = glamorous.h5({
  fontSize: 11,
  textTransform: 'uppercase',
  fontFamily: '-apple-system, "Helvetica Neue", "Lucida Grande"',
  letterSpacing: '0.06em'
})

const HighlightText = glamorous.span({
  fontSize: 22,
  fontFamily: '"Oswald", sans-serif',
  backgroundColor: '#ffd14e',
  textTransform: 'uppercase',
  padding: '4px 6px 2px 6px',
  marginLeft: 4,
  color: '#36082d',
  [mediaQueries.phone]: {
    fontSize: 18
  }
})

const Body = glamorous.p({
  fontFamily: 'Arapey',
  fontSize: 24,
  color: '#36082d',
  lineHeight: 1.5,
  marginBottom: 40,
  [mediaQueries.phone]: {
    fontSize: 20,
    marginBottom: 24
  }
})

const Blockquote = glamorous.blockquote({
  margin: 0,
  borderLeft: '4px solid #ffd14e',
  paddingLeft: 24,
  fontSize: 24,
  fontFamily: 'Arapey',
  fontStyle: 'italic',
  lineHeight: 1.5,
  color: '#36082d',
  marginBottom: 40,
  [mediaQueries.phone]: {
    fontSize: 20
  }
})

const SubtleText = glamorous.span({
  color: '#999'
})

export default Home
