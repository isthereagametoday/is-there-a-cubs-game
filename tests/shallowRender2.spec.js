import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

const CoolComponent = ({greeting}) => (
  <div>
    <h1>Greeting</h1>
    <h2>{greeting}</h2>
  </div>
);

describe ('CoolComponent', () => {
  it('should render the greeting', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting='hello hi' />);
    const actual = renderer.getRenderOutput();
    const expected = <h2>hello hi</h2>;
    expect(actual).toIncludeJSX(expected);
  });
});