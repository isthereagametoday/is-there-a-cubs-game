import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <h2>{greeting}</h2>
  </div>
);

describe ('CoolComponent', () => {
  it('should...', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting='hello' />);
    const output = renderer.getRenderOutput();
    console.log(output);
  });
});