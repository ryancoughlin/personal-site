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
      <Text fontSize={[2, 4]} color={"muted"} fontWeight={"bold"}>
        <Link color={"muted"} href="https://dribbble.com/ryancoughlin">See snippets of work on Dribbble</Link>
      </Text>
      <Text fontSize={[4]} color={"muted"} fontWeight={"bold"}>
        <Link href="mailto:ryan@ryancoughlin.com" color={"muted"}>Contact via email</Link>
      </Text>

    </Box>
  </Box>
)

export default Currently
