import React from "react";
import "./Sidebar.css"
import "semantic-ui-css/semantic.min.css";
import { Icon } from 'semantic-ui-react'



const Sidebar = () => {
  return (
    <div>
      <div id="sidebar" className="sidebar">
        <div className="logo">
          <a href="/">My Assessment</a>
        </div>
        <div className="nav">

          <a href="/home" className="active_link"><Icon name='tv' /> Menu Option 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Icon name="plus" /></a>
          <a href="/about"><Icon name='briefcase' /> Menu Option 2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name="plus" /></a>
          <a href="/project"><Icon name='pagelines' /> Menu Option 3  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name='long arrow alternate right' /></a>
          <a href="/contact"><Icon name='sidebar' /> &nbsp;&nbsp;&nbsp;Menu Option 4</a>
          <a href="/contact"><Icon name='map' /> Menu Option 5</a>
          <a href="/contact"><Icon name='diamond' /> Menu Option 6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Icon name='long arrow alternate right' /></a>
          <a href="/contact" className="menu_seven"><Icon name='won' /> Menu Option7</a>
          <a href="#" className="setting" className="active_link"><Icon name='setting' />   Setting  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    <Icon name='long arrow alternate right' /></a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
