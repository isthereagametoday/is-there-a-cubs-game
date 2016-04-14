import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Home from '../content/home';

describe('Home', () => {
  it('should render', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Home />);
    const actual = renderer.getRenderOutput().type;
    const expected = 'a';
    expect(actual).toEqual(expected);
  });
});