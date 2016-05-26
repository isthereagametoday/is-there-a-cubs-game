import chai, {expect, assert, should} from 'chai';
import React from 'react';
import getToday from '../src/utils/date-utils';
import getDate from '../src/utils/api-utils';
import getTimes from '../src/utils/times-utils';

describe('the getting of today\'s date', function() {

  it('spits out today\'s date in a format given', function() {

  	const date = new Date();
  	const day = date.getUTCDay();
  	const month = date.getUTCMonth() + 1;
  	const year = date.getUTCFullYear();

  	expect(getToday.getToday('eMYYYY')).to.equal(day.toString() + month.toString() + year.toString());

  })

   it('spits out today\'s date in a length given', function() {
  	assert.lengthOf(getToday.getToday('', 5), 5);
  })

})


describe('the getting of a game\'s status', function() {

  it('spits out today\'s game status as yes', function() {
  	return getDate.getDate('2016-09-16', 'http://0.0.0.0:3000')
  		.then(function(value) {
        expect(value.data[0].eventType).to.equal('game');
  	})
 	})

 	 it('spits out today\'s game status as no', function() {
  	return getDate.getDate('2001-09-16', 'http://0.0.0.0:3000')
  		.then(function(value) {
        expect(value.data[0]).to.be.undefined;
  	})
 	})

})

describe('the getting of a game\'s times', function() {

  it('spits out one time', function() {
  	return getDate.getDate('2016-09-16', 'http://0.0.0.0:3000')
  		.then(function(value) {
  			console.log(getTimes.getTimes(value));
        expect(value.data[0].eventType).to.equal('game');
  	})
 	})

})

