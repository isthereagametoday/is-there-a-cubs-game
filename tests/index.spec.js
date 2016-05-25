import chai, {expect, assert} from 'chai';
import jsxChai from 'jsx-chai';
import React from 'react';
import getToday from '../src/utils/date-utils';
import getDate from '../src/utils/api-utils';

chai.use(jsxChai)

describe('the getToday function',() => {

  it('spits out today\'s date in a format given', () => {

  	const date = new Date();
  	const day = date.getUTCDay();
  	const month = date.getUTCMonth() + 1;
  	const year = date.getUTCFullYear();

  	expect(getToday.getToday('eMYYYY')).to.equal(day.toString() + month.toString() + year.toString());

  })

   it('spits out today\'s date in a length given', () => {
  	assert.lengthOf(getToday.getToday('', 5), 5);
  })

})


describe('the getDate function',() => {

  it('spits out today\'s game status', () => {
  	const gameStatus = getDate.getDate('12-1-2002');
  	console.log(gameStatus.then(date => {return date.data}));
  	expect(gameStatus.then(date => {return date.data})).to.not.equal('red');

  })

 })