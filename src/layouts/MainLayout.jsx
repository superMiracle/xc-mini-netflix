import React, { Fragment, Component } from "react";

import Header from "../components/Header";

import styles from "./MainLayout.scss";

const MainLayout = (props) => (
  <Fragment>
    <div className={styles.root}>
      <Header />
      <main className={styles.content}>{props.children}</main>
    </div>
  </Fragment>
);

export default MainLayout;
