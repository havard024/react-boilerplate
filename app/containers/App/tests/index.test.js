import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import App from '../index';
import { Layout, NavDrawer, Panel } from 'react-toolbox/lib/layout';
import AppBar from 'react-toolbox/lib/app_bar';

describe('<App />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render the Layout', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Layout).length).toEqual(1);
  });

  it('should render the NavDrawer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(NavDrawer).length).toEqual(1);
  });

  it('should render the Panel', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Panel).length).toEqual(1);
  });

  it('should render the AppBar', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(AppBar).length).toEqual(1);
  });
});
