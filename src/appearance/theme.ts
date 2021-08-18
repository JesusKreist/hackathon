import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  layerStyles: {
    base: {
      bg: "gray.50",
      border: "2px solid",
      borderColor: "gray.500",
    },
    selected: {
      bg: "teal.500",
      color: "teal.700",
      borderColor: "orange.500",
    },
  },
  components: {
    Divider: {},
  },
  colors: {
    proof: "#99abce",
    brand50: { 500: "#1b1b44" },
    brand100: { 500: "#13132f" },
    brand200: { 500: "#1e43ff" },
    brand300: { 500: "#1eb5ff" },
    brandLight: {
      50: "#373775",
      100: "#373775",
      200: "#252553",
    },
    brand: {
      50: "#1b1b44",
      100: "#13132f",
      200: "#1e43ff",
      300: "#1eb5ff",
    },

    brandDark: {
      50: "#e7e8ff",
      100: "#bbbbf6",
      200: "#8f8eee",
      300: "#6362e7",
      400: "#3835e0",
      500: "#221dc7",
      600: "#19169b",
      700: "#1b1b44",
      800: "#13132f",
      900: "#02021a",
    },
  },
  fonts: {
    heading:
      'GT Walsheim Pro, Ubuntu Mono, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
    body: 'GT Walsheim Pro, Ubuntu Mono, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
    mono: 'Roboto Mono, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
  },
};
// #090944

export const theme = extendTheme(config);
