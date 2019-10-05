import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      showSideDrawer: false
    }
  }
  
  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  toggleDrawerHandler = () => {
    this.setState((prevState) => { return {showSideDrawer: !prevState.showSideDrawer} });
  }

  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuth}
          toggleDrawer={this.toggleDrawerHandler} />
        <SideDrawer
          isAuth={this.props.isAuth}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: (state.auth.token !== null)
  }
}

export default connect(mapStateToProps)(Layout);