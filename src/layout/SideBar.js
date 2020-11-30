import React from "react";
import SidebarItems from "./SidebarItems";
import { connect } from "react-redux";

const SideBar = () => {
  return (
        <SidebarItems />
  );
};

const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps)(SideBar);
