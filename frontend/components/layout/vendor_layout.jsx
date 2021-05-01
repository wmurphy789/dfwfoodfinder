import React from "react";
import Header from "./layout-components/header/Header";
import Sidebar from "./layout-components/sidebar/Sidebar";
import Footer from "./layout-components/footer/Footer";

class VendorLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div
        id="main-wrapper"
        data-theme={"dark"}
        data-layout={"vertical"}
        data-sidebartype={"full"}
        data-sidebar-position={"fixed"}
        data-header-position={"fixed"}
        data-boxed-layout={"full"}
      >
        {/*--------------------------------------------------------------------------------*/}
        {/* Header                                                                         */}
        {/*--------------------------------------------------------------------------------*/}
        <Header />
        {/*--------------------------------------------------------------------------------*/}
        {/* Sidebar                                                                        */}
        {/*--------------------------------------------------------------------------------*/}
        <Sidebar props={this.props} />
        {/*--------------------------------------------------------------------------------*/}
        {/* Page Main-Content                                                              */}
        {/*--------------------------------------------------------------------------------*/}
        <div className="page-wrapper d-block">
          <div className="page-content container-fluid">
            {this.props.children}
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default VendorLayout;