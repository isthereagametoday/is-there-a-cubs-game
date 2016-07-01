import chai, {expect, assert, should} from 'chai';
import {mount, shallow, render} from 'enzyme';

import React from 'react';

import getToday from '../src/utils/date-utils';
import getDate from '../src/utils/api-utils';
import getTimes from '../src/utils/times-utils';

import Home from '../src/components/content/home';

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

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
  	return getDate.getDate('2016-09-16')
  		.then(function(value) {
        expect(value.data[0].eventType).to.equal('game');
  	})
 	})

 	it('spits out today\'s game status as no', function() {
  	return getDate.getDate('2001-09-16')
  		.then(function(value) {
        expect(value.data[0]).to.be.undefined;
  	})
 	})

})

describe('the getting of a game\'s times', function() {

  it('spits out one time', function() {
  	return getDate.getDate('2016-09-16')
  		.then(function(value) {
  			const gameTime = getTimes.getTimes(value);
        expect(gameTime).to.have.length.of.at.least(7);
  	})
 	})

 	it('spits out multiple times', function() {
  	return getDate.getDate('2016-08-16')
  		.then(function(value) {
  			const gameTimes = getTimes.getTimes(value);
        expect(gameTimes).to.have.length.of.at.least(19);
  	})
 	})

})

describe('the getting of a game\'s messaging', function() {

  it('renders the yes message', function() {
  	const component = mount(<Home />);
  	expect(component.find())
 	})

 	it('renders the no message', function() {

 	})

 	it('renders the multiple message', function() {

 	})

})

