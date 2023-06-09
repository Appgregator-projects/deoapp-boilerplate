import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardRouter from "./DashboardRouter";
import SettingRouter from "./SettingRouter";

function MainRouter() {
    const allRouter = [...DashboardRouter];
    return (
        <Routes>
            <Route path="setting/*" element={<SettingRouter />} />
            
            {allRouter.map((item, index) => {
                return <Route key={index} path={item.path} element={item.element} />;
            })}
        </Routes>
    );
}

export default MainRouter;
