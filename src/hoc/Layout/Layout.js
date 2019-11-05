import React, { Component, useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {

  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  }

  const toggleDrawerHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  }

  return (
    <Aux>
      <Toolbar
        isAuth={props.isAuth}
        toggleDrawer={toggleDrawerHandler} />
      <SideDrawer
        isAuth={props.isAuth}
        open={showSideDrawer}
        closed={sideDrawerClosedHandler} />
      <main className={classes.Content}>
        {props.children}
      </main>
      <footer style={{ width: "100%", padding: "15px", boxSizing: 'border-box', textAlign: "center" }}>
        <span>Created by Filip Sutkowy, check </span>
        <a target="_blank" href="https://github.com/Filip-Sutkowy/burgerapp" style={{ color: "#000" }}>Github repo</a>
      </footer>
    </Aux>
  );
}

const mapStateToProps = state => {
  return {
    isAuth: (state.auth.token !== null)
  }
}

export default connect(mapStateToProps)(Layout);