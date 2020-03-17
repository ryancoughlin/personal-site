import React from "react"
import { ThemeProvider, Styled } from "theme-ui"
import theme from "../theme"
import { Box } from "rebass"

import Introduction from "../components/Introduction"
import Currently from "../components/Currently"

export default () => (
  <ThemeProvider theme={theme}>
    <Box
      sx={{
        backgroundColor: "#f6f9f5",
        borderTopColor: "primary",
        borderTopWidth: "4px",
        borderTopStyle: "solid",
      }}
    >
      <Introduction />
      <Currently />
    </Box>
  </ThemeProvider>
)
