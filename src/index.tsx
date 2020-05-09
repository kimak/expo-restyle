import React from "react";

import { ThemeProvider, createBox, createText } from "@shopify/restyle";

import { theme, Theme } from "./theme";

const Box = createBox<Theme>();
const Text = createText<Theme>();

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        flexGrow={1}
        alignItems="center"
        justifyContent="center"
        backgroundColor="homeBackground"
      >
        <Box
          backgroundColor="cardPrimaryBackground"
          padding={{ s: "m", l: "xl" }}
          width={{ s: 200, l: 400 }}
        >
          <Text
            color="textPrimary"
            fontWeight="900"
            fontSize={{ s: 12, l: 18 }}
          >
            Open up App.tsx to start working on your app!
          </Text>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
