import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { SidebarComponent } from "../Components/Sidebar/SidebarComponent";
import AuthenticationRouter from "./AuthenticationRouter";
import DashboardRouter from "./DashboardRouter";
import ExampleRouter from "./ExampleRouter";
import SettingRouter from "./SettingRouter";

function AuthRouter() {
  const authRouter = [...AuthenticationRouter];
  return (
    <Routes>
      {authRouter.map((item, index) => {
        return <Route key={index} path={item.path} element={item.element} />;
      })}
    </Routes>
  );
}

export default AuthRouter;
