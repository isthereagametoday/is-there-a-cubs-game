import chai, {expect, assert, should} from 'chai';
import {mount, shallow, render} from 'enzyme';

import React from 'react';

import getToday from '../src/utils/date-utils';
import getDate from '../src/utils/api-utils';
import getTimes from '../src/utils/times-utils';

import Home from '../src/components/content/home';
import Yes from '../src/components/content/yes';
import No from '../src/components/content/no';

import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');

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


describe('the getting of a event\'s status', function() {

  it('spits out today\'s event status as yes', function() {
    return getDate.getDate('2017-06-19')
      .then(value => {
        expect(value.val().eventDate).to.equal('2017-06-19');
    })
  })

  it('spits out today\'s event status as no', function() {
    return getDate.getDate('2017-06-18')
      .then(value => {
        expect(value.val()).to.be.null;
    })
  })

})

describe('the getting of a event\'s time', function() {

  it('spits out one time', function() {
  	return getDate.getDate('2017-06-19')
  		.then(function(value) {
  			const eventTime = getTimes.getTimes(value);
        expect(eventTime).to.have.length.of.at.least(7);
  	})
 	})

 	it('spits out multiple times', function() {
  	return getDate.getDate('2017-04-10')
  		.then(function(value) {
  			const eventTimes = getTimes.getTimes(value);
        expect(eventTimes).to.have.length.of.at.least(19);
  	})
 	})

})

describe('the getting of a event\'s type', function() {

  it('spits out an event as a game', function() {
    return getDate.getDate('2017-06-19')
      .then(value => {
        expect(value.val().eventType).to.equal('game');
    })
  })

  it('spits out an event as a concert', function() {
    return getDate.getDate('2017-07-01')
      .then(value => {
        expect(value.val().eventType).to.equal('concert');
    })
  })

})

describe('the getting of a game\'s messaging', function() {

  it('renders the yes message', function() {
    const component = mount(<Yes times={"9:99 PM"} />);
    expect(component.text()).to.equal('YES at 9:99 PM.');
 	})

 	it('renders the no event message', function() {
    const component = mount(<No />);
    expect(component.text()).to.equal('NO.');
 	})

 	it('renders the multiple game message', function() {
    const component = mount(<Yes times={'9:99 PM and 7:77 PM'} />);
    expect(component.text()).to.equal('YES. There are actually 2 games today, at 9:99 PM and 7:77 PM.');
 	})

  it('renders the concert message', function() {
    const component = mount(<Yes times={'6:66 PM'} type={'concert'} />);
    expect(component.text()).to.equal('WELL, There is actually a concert today at 6:66 PM.');
  })

})

