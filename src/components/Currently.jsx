import React, { Component } from "react"
import { Box, Link, Heading, Button, Text } from "rebass"
import { Styled } from "theme-ui"

const Currently = () => (
  <Box
    sx={{
      py: 4,
      mt: 5,
      backgroundColor: "primary",
    }}
  >
    <Box sx={{ maxWidth: 550, mx: "auto" }}>
      <Heading
        color="black"
        fontSize={[6]}
        marginBottom={4}
        letterSpacing="0.050em"
      >
        I am currently building Workplace Experience Software at{" "}
        <Link to="">Robin</Link>
      </Heading>

      <Text fontSize={[5]} fontWeight={"bold"}>
        Let's talk if the above sounds like something your organization needs.
      </Text>

    </Box>
  </Box>
)

export default Currently
