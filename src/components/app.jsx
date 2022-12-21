import React, { Fragment } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import RightSidebar from "../layout/RightSidebar";
import Footer from "../layout/Footer";
import Loader from "../layout/Loader";
import ThemeCustomize from "../components/common/ThemeCustomize";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Loader />
      <div className="page-wrapper">
        <div className="page-body-wrapper">
          <Header />
          <Sidebar />
          <RightSidebar />
          <div className="page-body">{children}</div>
          <Footer />
          <ThemeCustomize />
        </div>
      </div>
    </Fragment>
  );
};

export default AppLayout;
