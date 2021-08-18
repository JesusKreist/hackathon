import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import FileUpload from "./components/FileUpload/FileUpload";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bgColor="gray.900" placeContent="center">
        <Flex
          minHeight="80vh"
          alignItems="center"
          justifyContent="center"
          bgColor="black"
          color="white"
          height="800px"
          width="800px"
          border="2px solid yellow"
          p="4rem"
        >
          <Grid border="2px" w="100%" h="100%" placeContent="center">
            <Heading color="white">Upload</Heading>
            <FileUpload />
          </Grid>
        </Flex>
      </Grid>
    </Box>
  </ChakraProvider>
);
