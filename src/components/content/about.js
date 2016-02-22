import React from 'react';
import moment from 'moment';
import tz from 'moment-timezone'; // eslint-disable-line no-unused-vars

import Nav from './nav';
import Header from './header';
import Footer from './footer';

class About extends React.Component {

  now(format) {
    return moment().tz('America/Chicago').format(format);
  }

  render() {
    return (
      <div className="row">
        <div className="column-xsmall">
          <Header now={this.now} />
          <h3>Hello there.</h3>
          <p>
            Firstly, I would like to note that if you're actually a baseball fan
            looking to know whether there is a game today, out of an actual interest
            in said game, this site is not for you. Mostly because this site only pays
            attention to home games at Wrigley Field. I have created this website as a
            resource for the rest of us Chicagoans who don't really care enough about
            baseball to actually pay attention to the schedule. However, like any
            large, well-attended event, Cubs games cause traffic backups, service
            disruptions, and are generally kind of inconvenient.
          </p>
          <p>You might find this site useful if:</p>
          <ul>
            <li>
              You live near enough to the Wrigley and want to know if you'll need to walk
              through a minefield of dried vomit, beer cans and blue/red paraphernalia.
            </li>
            <li>
              Your daily commute takes you through Lakeview, either by car, bike or
              bus (maybe today you'll avoid trying to find parking or the 22 Clark bus).
            </li>
            <li>
              You are considering patronizing the fine cultural (Smartbar! Music Box!)
              or culinary (Cozy! Uncommon Ground!) institutions in Wrigleyville and want
              to be prepared for a wait, or an arduous walk through the neighborhood.
            </li>
            <li>
              You’d rather try to leave work early or late to avoid listening to
              someone be verbally, profanely, drunkenly abused in front of his schoolage
              children for the crime of wearing a Cardinals hat. (This incident was
              actually tne impetus for me to create this site in the first place.)
            </li>
            <li>
              You hate baseball. Or litter. Or drunks stumbling in the bike lane. Or
              fights in the street. Or slow-moving groups of people. Did we mention litter?
            </li>
            <li>
              You are just pain sick of walking, biking, driving or commuting through a
              crowded Wrigleyville without warning.
            </li>
          </ul>
          <p>
            This site lists the times that games start, because I’ve found that there is a
            difference in the interruptions caused by day and night games. Crowds and crowd
            control measures become noticeably disruptive about two hours before a game.
          </p>
          <p>
            Early games will regrettably keep the neighborhood congested throughout rest of
            the day.
          </p>
          <p>
            Afternoon games will do the same, but thankfully, you can scoot by Wrigley earlier
            in the morning and beat the crush.
          </p>
          <p>
            In both instances, everyone will have mostly dispersed by late evening. Unless, of
            course:
          </p>
          <p>
            Evening games won’t really affect that day too badly, but will turn late night
            Wrigleyville into a ridiculous mess.
          </p>
          <p>
            The schedule the site uses will be refreshed every Sunday night, so try not to get too
            mad at me if a crazy circumstance means a game gets delayed or rescheduled last minute
            or something. Tweets/alerts run once a day at midnight. This site itself began in 2009.
          </p>
          <p>
            Apologies for the kerfuffle that was last year (2015), I didn't care enough to update
            the game data, nor was I prepared for any sort of post-season because obviously. Because
            of the new way I want to handle game data (getting it more regularly, and having it be
            more accurate in general) and due to semi-popular demand, I'll also be including events
            like concerts at Wrigley field in the site's daily notice, though all updates will end
            every year when the season ends, and will start up again in the spring of the next year.
          </p>
          <p>
            This site is very occasionally maintained by a native Chicagoan, who is a web developer
            / caffeine aficianado by day, and a frequent cyclist / electronic music enthusiast by
            night. It was rebuilt in React in 2016 and leverages isomorphic/universal JS to run the
            script on the Node server at midnight so the tweets and whatnot go out in a timely
            fashion and the SEO is still, you know, working without any dings from Google.
          </p>
          <p>
            I'm actually actually very baseball-neutral, though my father is a Sox fan, so I
            guess I'd default to that if I was into sports. I did live for years within half a
            mile of Wrigley Field, and love the neighorhood. There are many places to go and things
            to do and people to see in the general Lakeview area and I would suggest doing so.
          </p>
          <p>
            Just not on game days.
          </p>
          <p>
            Today's game day status will also be Tweeted, so follow @IsThereCubsGame, and/or like us
            on Facebook at IsThereACubsGameToday.com for a daily status update. From there you set
            up notifications however you want, like email/text which a couple people have asked for.
          </p>
          <p>
            And yes, a friend does run CubParking.com. He's good people, give him your business.
          </p>
          <Nav />
          <Footer />
        </div>
      </div>
    );
  }
}

export default About;
