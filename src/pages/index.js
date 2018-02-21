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
        I’ve been working at that for the last 10 years. And I&apos;ve found
        that all great products have one thing in common:
      </Body>

      <Blockquote>
        They were created by a talented and hardworking team. Each team member
        knew the product had a specific problem it was trying to solve. From
        defining that problem with a design sprint, developing a user journey,
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

      <Body>
        If you’d like to see examples of my previous work, check out my
        portfolio on{' '}
        <TextLink href="http://dribbble.com/ryancoughlin" textColor={'#ea4c89'}>
          Dribbble
        </TextLink>.
      </Body>
    </ContentContainer>
    <LoudContainer>
      <ContentContainer>
        <SectionHeadline textColor={'#b798b1'}>
          Currently, I am building conference room scheduling products.
        </SectionHeadline>

        <Body textColor={'#b798b1'}>
          After years of immersing myself within product teams consulting at
          <span>thoughtbot</span> and <span>MojoTech</span>.{' '}
          <em>
            I missed the ability focus and practice my craft on a single
            platform.
          </em>
        </Body>

        <Body textColor={'#b798b1'}>My day to day consists of:</Body>

        <ul>
          <ListItem textColor={'#b798b1'}>
            Working closely with my design team ensuring initiatives are being
            created and brought to market.
          </ListItem>
          <ListItem textColor={'#b798b1'}>
            Creating organization across visual directions to create design
            consistency across each product in the platform.
          </ListItem>
          <ListItem textColor={'#b798b1'}>
            Create communication channels with product managers to ensure
            designs are hitting quarterly goals, validated solving problems and
            prioritizing the right tasks.
          </ListItem>
          <ListItem textColor={'#b798b1'}>
            Facilitating design sprints with designers, developers and product
            managers &mdash; <em>Build the right thing, at the right time.</em>
          </ListItem>
          <ListItem textColor={'#b798b1'}>
            Mentoring the design team to help effectively convey the goal of
            their design and what problem it is trying to solve, addressing
            pushback from product, prioritizing daily and quarterly tasks, and
            overall design process.
          </ListItem>
        </ul>
      </ContentContainer>
    </LoudContainer>

    <ContentContainer>
      <Body>
        I’ve learned something as a designer that means the difference between a
        team collaborating smoothly and creating an awesome app or not… and that
        is passion. When every member of your team is passionate about
        contributing their expertise to the success of an app, the end result is
        a much better product.
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

const LoudContainer = glamorous.div({
  backgroundColor: '#36082d',
  paddingTop: 60,
  paddingBottom: 60,
  marginBottom: 60
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

const Body = glamorous.p(
  {
    fontFamily: 'Lora',
    fontSize: 18,
    color: '#36082d',
    lineHeight: 1.64,
    marginBottom: 40,
    [mediaQueries.phone]: {
      fontSize: 20,
      marginBottom: 22
    }
  },
  ({ textColor }) => ({
    color: textColor
  })
)

const ListItem = glamorous.li(
  {
    fontFamily: 'Lora',
    fontSize: 18,
    color: '#36082d',
    lineHeight: 1.64,
    marginBottom: 24
  },
  ({ textColor }) => ({
    color: textColor
  })
)

const Blockquote = glamorous.blockquote({
  margin: 0,
  borderLeft: '6px solid #ffd14e',
  paddingLeft: 22,
  fontSize: 18,
  fontFamily: 'Lora',
  fontStyle: 'italic',
  lineHeight: 1.64,
  color: '#36082d',
  marginBottom: 40,
  marginLeft: '-28px',
  [mediaQueries.phone]: {
    fontSize: 20
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
