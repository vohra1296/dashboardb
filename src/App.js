import { useState } from 'react'
import Navbar from './Assets/components/navbar/Navbar';
import SidebarOption from './Assets/components/sidebar/Sidebar';
import "semantic-ui-css/semantic.min.css";
import Main from './Assets/components/main/main';





const App = () => {
 

  return (
    <div className="container">
      <Navbar  />

      <Main />

      <div style={{ display: "flex" }}>
        <SidebarOption />
      </div>
      
    </div>

  )
}

export default App;
