import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM Naming Convention
    <div className='app'>
      <Header />

      <div className='app_body'>
        <Sidebar />
        {/* SideBar */}

        {/* Feed */}

        {/* Widget */}
      </div>
    </div>
  );
}

export default App;
