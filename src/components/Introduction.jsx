import React, { Component } from "react"
import { Box, Link, Heading, Button, Text } from "rebass"
import { Styled } from "theme-ui"

const Introduction = () => (
  <Box
    sx={{
      py: 4,
      mt: 5,
    }}
  >
    <Box px={[3, 5]} sx={{ maxWidth: 820, mx: "auto" }}>
      <Text
        fontSize={"10px"}
        fontWeight={"bold"}
        mb={2}
        sx={{ textTransform: "uppercase", letterSpacing: "0.050em" }}
      >
        Ryan Coughlin &nbsp;
        <Text color={"muted"} sx={{ display: "inline" }}>
          / Mainer, Designer, and Fly Fishing Junkie
        </Text>
      </Text>
      <Heading fontSize={[7, 9]} mb={4} letterSpacing="0.050em">
        What makes a great digital product?
      </Heading>
      <Text fontSize={[2, 4]} mb={3}>
        I've been working at that for the last 10 years.
      </Text>
      <Text fontSize={[2, 4]} mb={3} fontWeight={"bold"}>
        What I’ve found so far is that every product should start with a
        discovery phase of cross-team research and customer validation. This
        provides a foundation to define problems, solve them, and iteratively
        deliver solutions to customers. Teams who are aligned and collaborative have the ability to produce some amazing work.
      </Text>
      <Text fontSize={[2, 4]} mb={3}>
        Design can deliver a great experience by:
      </Text>
      <Box as="ul">
        <Text fontSize={[2, 4]} as="li" mb="3">
          Conduct research to define high-value opportunities that can impact
          the business and product strategy
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Ask yourself,{" "}
          <i>
            "Who else in the organization can we learn from? Who talks to
            customers the most?"
          </i>
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Understand the business case and problems with the Product team
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Assemble user journeys to create a seamless experience without
          dead-ends
        </Text>{" "}
        <Text fontSize={[2, 4]} as="li" mb="3">
          Run brainstorm meetings to collaborate on problem-solving with
          Engineers and Product
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Mature whiteboard notes into testable UX with customers
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Establish UX and UI patterns that create predictable experiences
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Evangelize the value of the work to be done to the organization.{" "}
          <strong>Align and rally the team.</strong>
        </Text>
      </Box>
      <Text fontSize={[2, 4]} fontWeight="bold" mb={3}>
        Rinse, improve, and repeat.
      </Text>
      <hr />
      <Text fontSize={[2, 4]}>
        My name is Ryan Coughlin, Design Lead at Robin. I figure out creative
        and functional solutions that build innovative products.
      </Text>
      <Text fontSize={[2, 4]}>
        You can see bits from current and past projects at <Link>Dribbble</Link>
      </Text>
      <Text fontSize={[2, 4]}>
        I am currently designing Workplace Experience software.
      </Text>
    </Box>
  </Box>
)

export default Introduction
