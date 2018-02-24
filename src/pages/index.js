import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Currently from '../components/currently'
import WhatsNext from '../components/whats-next'
import Background from '../components/background'
import IntroHeadline from '../components/intro-headline'
import Styles from '../common/styles/'

const Home = () => (
  <Page>
    <Helmet
      title="Ryan Coughlin - Mainer, Designer an Fly Fishing Junkie"
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />
    <IntroHeadline />
    <Styles.Containers.Content>
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
    </Styles.Containers.Content>
    <Currently />
    <WhatsNext />
    <Background />
  </Page>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const Page = glamorous.div({
  borderTop: '8px solid #ffd14e',
  paddingTop: 80
})

const SupportingHeadline = glamorous.h2(
  {
    fontSize: 24,
    marginTop: 23,
    fontFamily: '"Oswald", sans-serif',
    textTransform: 'uppercase',
    color: '#36082d',
    letterSpacing: '0.017em',
    [mediaQueries.phone]: {
      fontSize: 18
    }
  },
  ({ textColor }) => ({
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

const TextLink = glamorous.a(
  {
    color: '#fff'
  },
  ({ textColor }) => ({
    color: textColor
  })
)

export default Home
