import React from 'react';
import moment from 'moment-timezone';

class Home extends React.Component {
  render(){
    var now = moment().tz("America/Chicago").format();
    console.log(now);
    return (
      <div>
        <header>
          <h2>Today is echo date("l, F j, Y")</h2>
        </header>

        <h1>Is There a 
          <span class="c-neg">C</span>
          <span class="c-pos">ubs</span> 
          Game Today?
        </h1>

        {ternary ? <h2 /> : <h2 />}

        <h3>
          Probably not! Another season done and gone. Come back next year!
        </h3>

        <nav>
          <a href="about">What / Why?</a>
          <a href="http://twitter.com/IsThereCubsGame">@IsThereCubsGame</a>
          <a href="http://feeds.feedburner.com/isthereacubsgametoday">RSS Feed</a>
          <div>
            Hey, neighbors. Live in the Lakeview/Wrigleyville area? You can make some extra money selling your parking spot to Cubs fans on game days.<br /> They'll handle all the parking operations for you! Check out <a href="http://cubparking.com/?utm_source=IsThereACubsGameToday&utm_medium=SEO&utm_campaign=IndexLink" target="_blank">CubParking.com</a>. <br />
            Are you looking for <a href="http://cubparking.com/?utm_source=IsThereACubsGameToday&utm_medium=SEO&utm_campaign=IndexLink" target="_blank">cubs parking</a>? It's a great alternative to official <a href="http://cubparking.com/?utm_source=IsThereACubsGameToday&utm_medium=SEO&utm_campaign=IndexLink" target="_blank">Wrigley Field Parking</a>. <a href="http://cubparking.com/?utm_source=IsThereACubsGameToday&utm_medium=SEO&utm_campaign=IndexLink" target="_blank">CubParking.com </a>
          </div>
        </nav>
        <footer>
          The Chicago Cubs® is a trademark belonging to Major League Baseball Properties, Inc. or the respective teams, the owner of this site disclaims ownership of any trademarks, logos or images belonging to Major League Baseball Properties, Inc. or the respective team appearing on this site. The appearance of trademarks and/or team logos belonging to Major League Baseball Properties, Inc. or the respective team on this website does not constitute affiliation or endorsement by Major League Baseball or respective team of any of the services provided by this website.
        </footer>
      </div>
 	  );
  }
}

export default Home;