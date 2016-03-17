# istherecubsgame

A simple, tiny single-service website.

Todo list:
- This is launched. So uset your stuff for master, and stop pushing straight to it, please thank you. To-do is staging.
- Set up heroku scheduler for tweets with the twitter bin script from npm-twitter or just node twitter.js. 
  Don't care, just get 'er done.
- Add support for eventType, since I said I would push that til after launch and I launched.
- Tests or test. Well, three tests for yes no and well? Just test the damn thing.
  - Started by installing Jasmine and Karma today (2/21).

Stuff I am waiting on: 

  - Server-side means I can still have it update at midnight-ish for twitter/rss/whatnot. I think the AWS instance I set aside for this is in the East, remember to offset for the hour EST. 
  - Look into the csv to json build tools I saw just so I don't spend a bunch of time converting the dates.
  - RENDERING SERVER SIDE FOR SEO. THIS IS A BIG DEAL.
  - Why can't server.js be in ES6? I have to put it in the .esignore to make the linter happy.
  - Configure Webpack (using extract-text for prod styles, style-loader for dev styles)
  - After I get webpack, add an autoprefixer. This is too simple to break because I'm in love with flexbox.
  - Logic for when it's turned off for the season.


Stuff that is flat-out done:
  
  - _Set up Heroku._
    - **Done, with the to-do branch for staging and master for production in the Pipeline. Also got the DNS pointed correctly, so don't eff up master anymore, please Mica. Love, Mica** 
  - _Should I move the smaller components into a directory, leaving the large views in another (About/Home vs header/footer/nav/seo)? Probably. Make sure to resolve the paths in webpack so I'm not having to put relative path everywhere._
  - _So in the first setState for init(), if the filtered Result array comes back undefined, I get an error because result.eventTime is not defined, and instead of replaceState (which I wanted to do but will be depreciated) I'm re-setState-ing to the values the states have at getInitialSate, which seems the dumb but makes the error go away. Why is the setState getting called when result is undefined? Is there a better way to do this? I'm mutating the state to put it back to the way it was, no?_
   - _Got started on this with the server response, still need to add logic for what to do when an array > 1._
   - **Okay I fixed this but now I am kinda wondering if a server error is what I want for it to be returning.**
  - _Support for double-headers (remove the [0] from filter, reconfigure the state to hold two objects in an array and check both for times, or I guess put the data so .eventTime just says both? That seems dumb.)_
   - **Got this all working.**
  - _Obvs. get an actual schedule and put it in the server.js where the array lives._ **Did this today.**
  - _Does milligram's grid suck? Really? Because it might. I'm having to explicitly include a bunch of classes that I really feel I shouldn't. So look into FBG or something just for the grid. Is that all I'm using it for?_
  **Using Flexboxgrid now.**
  - _Milligram's lack of DRY because it's vanilla and not sass is enough on my nerves I think. I'm loading node-sass for a reason._ **Eventually will move to a sass build but not needed right now.**
  - _This. Is. Responsive. But. Not. Pretty. The text has got this crazy wide gutter on mobile that looks weird._ **Lookin better with Flexbox Grid but always could use improvements.**
  - _The about page should actually have stuff in it._ **The about page is basically an essay now**
  - _Favicon._ **Done**
  - _Title._ **Done**
  - _Grey body text._ **Done**
    - _I now have this.now running in both Home.js and About.js which seems like it doesn't need to be happening maybe. I want to put this.now and requirement for Moment/Moment-timezone only in "Header" but it's not the only component that cares about this.now, obviously home does as well. Do I put the moment and its formatting piece out into a util? Do I put the check for a game (this.init()) into a util? Maybe I leverage a getDefault props in header?_
   - **Moved this.now into date-utils as GetToday, I think it's better to only have Moment/TZ in one file.**
  - _Watch the repo for eslint-config-airbnb for that update that makes it eslint@2.2 compatible. Any day now._ **This was done today (2/21)**