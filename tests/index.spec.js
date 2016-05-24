import chai, {expect} from 'chai';
import jsxChai from 'jsx-chai';
import React from 'react';
import getToday from '../src/utils/date-utils';

chai.use(jsxChai)

describe('getToday',() => {
  it('spits out today\'s date', () => {
    expect(getToday.getToday().substr(0, 10).length).to.equal(10);
  })
})