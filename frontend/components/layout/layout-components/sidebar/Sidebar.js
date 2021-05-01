import React, { useState } from "react";
import { Nav, NavLink } from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

const Sidebar = (props) => {

  /*--------------------------------------------------------------------------------*/
  /*To Expand SITE_LOGO With Sidebar-Menu on Hover                                  */
  /*--------------------------------------------------------------------------------*/
  const expandLogo = () => {
    document.getElementById("logobg").classList.toggle("expand-logo");
  };
  /*--------------------------------------------------------------------------------*/
  /*Verifies if routeName is the one active (in browser input)                      */
  /*--------------------------------------------------------------------------------*/

  /*--------------------------------------------------------------------------------*/
  /*Its for scroll to to                    */
  /*--------------------------------------------------------------------------------*/

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showMobilemenu = () => {
    if(window.innerWidth < 800){
      document.getElementById("main-wrapper").classList.toggle("show-sidebar");
    }
  };

  return (

    <aside
      className="left-sidebar"
      id="sidebarbg"
      data-sidebarbg={"skin5"}
      onMouseEnter={expandLogo.bind(null)}
      onMouseLeave={expandLogo.bind(null)}
    >
      <div className="scroll-sidebar">
        <PerfectScrollbar className="sidebar-nav">
          {/*--------------------------------------------------------------------------------*/}
          {/* Sidebar Menus will go here                                                */}
          {/*--------------------------------------------------------------------------------*/}
          <Nav id="sidebarnav">
            <li
              onClick={scrollTop}
              className={"sidebar-item"}
            >
              <NavLink
                to={"/"}
                className={window.location.href.includes('/checkins') ? "active active-pro sidebar-link" : "sidebar-link"}
                onClick={showMobilemenu}
              >
                <i className={"mdi mdi-alarm-plus"} />
                <span className="hide-menu">Check In</span>
              </NavLink>
            </li>
            <li
              className={"sidebar-item"}
            >
              <NavLink
                href={"/#/vendor/history"}
                className={window.location.href.includes('/history') ? "active active-pro sidebar-link" : "sidebar-link"}
              >
                <i className={"mdi mdi-alarm-plus"} />
                <span className="hide-menu">Past Check Ins</span>
              </NavLink>
            </li>
          </Nav>
        </PerfectScrollbar>
      </div>
    </aside>
  );
};

export default Sidebar;
