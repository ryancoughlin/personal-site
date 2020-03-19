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
      <Box as="ul" ml={2}>
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
      <Text fontSize={[2, 4]} mb={5}>
        <em>Rinse, improve, and repeat.</em> The above are essential for Design leadership to bring to an organization and coach Designers to run with them.
      </Text>
      <Text fontSize={[2, 4]} fontWeight={"bold"} mb={3}>
        My name is Ryan Coughlin. I grew up in a small coastal town in Maine. Outside of work, I love to spend time on the water and outdoors.
      </Text>
      <Text fontSize={[2, 4]} fontWeight={"bold"} mb={3}>
        In my free time, I enjoy shooting photos, tying flies, and exploring new water.
      </Text>

      <Text fontSize={[2, 4]} mb={3}>
        I am currently Design Team Lead at Robin, where I design software to deliver a great Workplace Experience.
      </Text>
      <Text fontSize={[2, 4]} mb={3}>
        Within an average day, I:
      </Text>
      <Box as="ul" ml={2}>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Provide clear and direct feedback to designers to foster career growth
      </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Find opportunities to improve how Design interfaces with teams across the organization
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Support design by breaking down large initiatives into bite-sized chunks
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Provide long term direction to leadership to help define company vision
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Conduct research alongside Product and Engineering to build the right thing, at the right time
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Ensure visual and experience design is consistent across product lines
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Build design systems alongside a team of engineers
        </Text>
        <Text fontSize={[2, 4]} as="li" mb="3">
          Facilitate design sprints with Designers, Engineers, and Product. Uncover problems, create alignment, and deliver outcomes.
        </Text>
      </Box>
      <Text fontSize={[2, 4]}>
        You can see bits from current and past projects at <Link>Dribbble</Link>
      </Text>

    </Box>
  </Box>
)

export default Introduction
