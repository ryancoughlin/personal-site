import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import glamorous from 'glamorous'
import Styles from '../common/styles/'

const SideProject = ({ color, icon, name, description }) => (
  <Project color={color}>
    <Inner>
      <img src={icon} alt={name} width="52" height="52" />
      <Name>{name}</Name>
      <Description>{description}</Description>
    </Inner>
  </Project>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const Project = glamorous.div(
  {
    height: 360,
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column'
  },
  props => ({ backgroundColor: props.color })
)

const Inner = glamorous.div({
  flexDirection: 'column',
  padding: 24
})

const Name = glamorous.h3({
  fontSize: 24,
  textTransform: 'uppercase',
  fontFamily: '"Oswald", sans-serif',
  color: 'white',
  marginBottom: 8,
  marginTop: 40
})

const Description = glamorous(Styles.Type.Body)({
  color: 'rgba(255, 255, 255, 0.8)'
})

export default SideProject
