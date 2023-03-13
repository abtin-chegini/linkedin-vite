import React from "react";
import "./Sidebar.css";
import img from "../assets/gradient.jpg";
import Gravatar from "react-gravatar";
function Sidebar() {
  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p> {topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={img} alt="" />
        <Gravatar
          className="sidebar_avatar"
          email="abtin.chegini@gmail.com"
        ></Gravatar>
        <h2 className="sidebar_title">AbtinChegini</h2>
        <h4 className="sidebar_title_detail">
          {" "}
          Abtin.chegini@gmail.com
        </h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p> who viewed you </p>
          <p className="sidebar__stat_num"> 232</p>
        </div>
        <div className="sidebar__stat">
          <p> views on post</p>
          <p className="sidebar__stat_num">2,543</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("softwareengineering")}
        {recentItems("design")}
        {recentItems("developer")}
        
      </div>
    </div>
  );
}

export default Sidebar;
