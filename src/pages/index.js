import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Currently from '../components/currently'
import WhatsNext from '../components/whats-next'
import Background from '../components/background'
import IntroHeadline from '../components/intro-headline'
import SideProjects from '../components/side-projects'
import Styles from '../common/styles/'

const Home = () => (
  <Page>
    <Helmet
      title="Ryan Coughlin - Mainer, Designer an Fly Fishing Junkie"
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}
    />
    <Styles.Containers.Content>
      <Styles.Containers.Inner>
        <IntroHeadline />

        <Styles.Type.IntroHeadline>
          What makes a great digital product?
        </Styles.Type.IntroHeadline>

        <Styles.Type.Body>
          I’ve been working at that for the last 10 years. And I&apos;ve found
          that all great products have one thing in common:
        </Styles.Type.Body>

        <Blockquote>
          They were created by a talented and cohesive team. The problem the
          product solved was clearly known by each team member.
          <br /> <br />
          Each step was thoughtfully crafted from: defining the problem,
          developing user journeys, validating the product, and creating an
          initial plan to wireframe, design, and bring that product to market.
        </Blockquote>

        <SupportingHeadline>
          Hi, my name is Ryan Coughlin, and I’m a designer at&nbsp;<TextLink
            textColor={'#ec3948'}
            href="http://robinpowered.com"
          >
            robin
          </TextLink>. I figure out creative ways to make practical and
          innovative products.
        </SupportingHeadline>

        <Styles.Type.Body>
          If you’d like to see examples of my previous work, check out my
          portfolio on{' '}
          <TextLink
            href="http://dribbble.com/ryancoughlin"
            textColor={'#ea4c89'}
          >
            Dribbble
          </TextLink>.
        </Styles.Type.Body>

        <Styles.Type.SectionHeadline>
          Prior to Robin...
        </Styles.Type.SectionHeadline>
        <Styles.Type.Body>
          ...my time was spent consulting at{' '}
          <TextLink color={'#b798b1'} href="http://robinpowered.com">
            thoughtbot
          </TextLink>{' '}
          and{' '}
          <TextLink color={'#b798b1'} href="http://robinpowered.com">
            MojoTech
          </TextLink>. At these companies, I consulted for early stage startups,
          product companies, and large corporations. My roles included:
        </Styles.Type.Body>

        <ul>
          <ListItem>Product ideation and validation</ListItem>
          <ListItem>Design sprint facilitation</ListItem>
          <ListItem>Front-end design implementation</ListItem>
          <ListItem>Collaborating with product managers</ListItem>
        </ul>

        <Styles.Type.Body>
          I did not have the opportunity to practice my craft on a single
          platform.
        </Styles.Type.Body>
      </Styles.Containers.Inner>
    </Styles.Containers.Content>
    <Currently />
    <WhatsNext />
    <SideProjects />
    <Background />
  </Page>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const Page = glamorous.div({
  borderTop: '6px solid #ffd14e'
})

const SupportingHeadline = glamorous.h2(
  {
    fontSize: 24,
    fontFamily: '"Oswald", sans-serif',
    textTransform: 'uppercase',
    color: '#36082d',
    letterSpacing: '0.017em',
    marginBottom: 40,
    [mediaQueries.phone]: {
      fontSize: 18,
      marginBottom: 22
    }
  },
  ({ textColor }) => ({
    color: textColor
  })
)

const Blockquote = glamorous(Styles.Type.Body)({
  borderLeft: '4px solid #ffd14e',
  paddingLeft: 22,
  fontStyle: 'italic',
  color: '#36082d',
  marginLeft: '-28px',
  [mediaQueries.phone]: {
    marginLeft: 0
  }
})

const ListItem = glamorous(Styles.Type.ListItem)({
  marginBottom: 24
})

const TextLink = glamorous.a(
  {
    color: '#fff'
  },
  props => ({
    color: props.textColor
  })
)

export default Home
