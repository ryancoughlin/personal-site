import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import SideProject from './side-project'
import Styles from '../common/styles/'
import saltyIcon from '../assets/images/projects/salty.png'
import troposIcon from '../assets/images/projects/tropos.png'
import gradientDazeIcon from '../assets/images/projects/gradientdaze.png'

const SideProjects = () => (
  <Container>
    <Styles.Containers.Content>
      <Styles.Type.SectionHeadline>
        <s>Work</s> Side projects in the wild
      </Styles.Type.SectionHeadline>
      <Styles.Type.Body>
        As much as I love design, I was getting tired of only being able to make
        something in Sketch. Four years ago, I began to learn Objective C, which
        transitioned into Swift.
      </Styles.Type.Body>

      <Styles.Type.Body>
        Over the past the year, I have been working with React Native to build a
        few of the projects you can check out below.
      </Styles.Type.Body>

      <Styles.Type.Body>A few of them can be seen below:</Styles.Type.Body>
      <Projects>
        <SideProject
          name={'Tropos'}
          description={'How does it feel outside relative to yesterday?'}
          color={'#191921'}
          icon={troposIcon}
        />
        <SideProject
          name={'GradientDaze'}
          description={'Gesture based gradients never felt so good'}
          color={'#ef1787'}
          icon={gradientDazeIcon}
        />
        <SideProject
          name={'Salty'}
          description={'What is the current tide?'}
          color={'#209cf1'}
          icon={saltyIcon}
        />
      </Projects>
    </Styles.Containers.Content>
  </Container>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const Container = glamorous(Styles.Containers.Inner)({
  borderBottom: '1px solid #e8e8e8'
})

const Projects = glamorous.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  marginTop: 50
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

export default SideProjects
