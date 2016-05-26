/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Checkbox from 'react-toolbox/lib/checkbox';
import IconButton from 'react-toolbox/lib/button';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout';

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import styles from './styles.css';

/* eslint-disable react/prefer-stateless-function */
export default class App extends React.Component {

  static PropTypes = {
    chidlren: React.PropTypes.node,
  };

  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false,
    inverse: true,
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  };

  toggleSidebar = () => {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  render() {
    return (
      <Layout>
        <NavDrawer
          active={this.state.drawerActive}
          pinned={this.state.drawerPinned} permanentAt="xxxl"
          onOverlayClick={this.toggleDrawerActive}
        >
          <p>
            Navigation, account switcher, etc. go here.
          </p>
        </NavDrawer>
        <Panel>
          <AppBar><IconButton inverse={this.state.inverse} icon="menu" onClick={this.toggleDrawerActive} /></AppBar>
          <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
            <h1>Curato - Statistikkmodul</h1>
            <p>Main content goes here.</p>
            <Checkbox label="Pin drawer" checked={this.state.drawerPinned} onChange={this.toggleDrawerPinned} />
            <Checkbox label="Show sidebar" checked={this.state.sidebarPinned} onChange={this.toggleSidebar} />
            {this.props.children}
          </div>
        </Panel>
        <Sidebar pinned={this.state.sidebarPinned} width={5}>
          <div styles={styles.wrapper}><IconButton icon="close" onClick={this.toggleSidebar} /></div>
          <div style={{ flex: 1 }}>
            <p>Supplement content goes here.</p>
          </div>
        </Sidebar>
      </Layout>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
