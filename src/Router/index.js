import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { SidebarComponent } from "../Components/Sidebar/SidebarComponent";
import DashboardRouter from "./DashboardRouter";
import ExampleRouter from "./ExampleRouter";
import SettingRouter from "./SettingRouter";

function MainRouter() {
  return (
    // <Flex maxW='full'>
    // 	<Box position='sticky' overflowY='auto'>
    // 		<SidebarComponent />
    // 	</Box>
    <Routes>
      <Route path="/" element={<DashboardRouter />} />
      <Route path="dashboard/*" element={<DashboardRouter />} />
      <Route path="setting/*" element={<SettingRouter />} />
      <Route path="example/*" element={<ExampleRouter />} />
    </Routes>
    // </Flex>
  );
}

export default MainRouter;
