import React from "react";
import Tabs from "../Tabs";
import Tab from "../../Tab/Tab";

export default (
  <Tabs
    indicatorColor="primary"
    textColor="primary"
    uxpId="tabs-1"
    defaultValue={1}
  >
    <Tab label="Active" uxpId="tab-1" fullWidth />
    <Tab label="Disabled" uxpId="tab-2" fullWidth />
    <Tab label="Active" uxpId="tab-3" fullWidth />
  </Tabs>
);