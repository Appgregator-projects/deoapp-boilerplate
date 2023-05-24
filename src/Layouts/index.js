import React, { Fragment } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import themeConfig from "../Config/themeConfig";

function Layout({ children }) {
  let contentWidth =
    themeConfig.contentWidth === "full" ? "full" : "container.xl";

  const curentWindowHeight = window.innerHeight;
  console.log(curentWindowHeight, "curentWindowHeight");
  return (
    <Fragment>
      <Flex height="100vh" w={"full"} bgColor={"gray.50"}>
        <Sidebar layout={themeConfig.layout} />

        <Container maxW={"full"} overflowY={"scroll"} pt={"4"}>
          <Header layout={themeConfig.layout} />

          <Container minH={"95vh"} maxW={contentWidth}>
            {children}
          </Container>

          <Footer />
        </Container>
      </Flex>
    </Fragment>
  );
}

export default Layout;
