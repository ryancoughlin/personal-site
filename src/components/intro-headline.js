import React from 'react'
import glamorous from 'glamorous'
import Styles from '../common/styles/'

const IntroHeadline = () => (
  <TinyHeadline>
    ryan coughlin
    <SubtleText>
      {' '}
      <Slash>/</Slash> Mainer, designer & fly fishing junkie
    </SubtleText>
  </TinyHeadline>
)

const mediaQueries = {
  phone: '@media only screen and (max-width: 520px)'
}

const TinyHeadline = glamorous.h5({
  fontSize: 11,
  textTransform: 'uppercase',
  fontFamily: '-apple-system, "Helvetica Neue", "Lucida Grande"',
  letterSpacing: '0.06em',
  [mediaQueries.phone]: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const SubtleText = glamorous.span({
  color: '#999'
})

const Slash = glamorous.span({
  [mediaQueries.phone]: {
    display: 'none'
  }
})

export default IntroHeadline
