import React, { Component } from "react"
import { Box, Link, Heading, Button, Text } from "rebass"
import { Styled } from "theme-ui"

const Currently = () => (
  <Box
    sx={{
      py: 4,
      mt: 5,
      backgroundColor: "plum",
    }}
  >
    <Box sx={{ maxWidth: 550, mx: "auto" }}>
      <Heading
        color="muted"
        fontSize={[6]}
        marginBottom={4}
        letterSpacing="0.050em"
      >
        I am currently building Workplace Experience Software at{" "}
        <Link to="">Robin</Link>
      </Heading>

      <Text color="muted" mb={3}>
        My day-to-day consists of:
      </Text>
      <Box as="ul">
        <Text as="li" color="muted" mb="3">
          Enable and support the Design team to create solutions that hit
          product goals.
        </Text>
        <Text as="li" color="muted" mb="3">
          Create processes that bring Design, Product, and Engineers into the
          design process.
        </Text>
        <Text as="li" color="muted" mb="3">
          Enable Design to deliver on our narrative and strategy by
          communicating
        </Text>
        <Text as="li" color="muted" mb="3">
          Conduct research to alongside Product and Engineering to{" "}
          <i>build the right thing, at the right time</i>
        </Text>
        <Text as="li" color="muted" mb="3">
          Ensure visual and experience design is consistent across the platform
        </Text>
        <Text as="li" color="muted">
          Build design systems alongside a team of engineers
        </Text>
        <Text as="li" color="muted" mb="3">
          Facilitate design sprints with designers, engineers, and product
          managrs. Uncover problems, create alignment, and deliver outcomes.
        </Text>
        <Text as="li" color="muted" mb="3">
          Grow, mentor, and improve Design team.
        </Text>
      </Box>
    </Box>
  </Box>
)

export default Currently
