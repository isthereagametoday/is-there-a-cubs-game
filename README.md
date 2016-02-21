# istherecubsgame

A simple, tiny single-service website.

- Todo list
  - Tests or test. Well, three tests for yes no and well? Just test the damn thing.
  - Webpack (using extract-text for prod styles, style-loader for dev styles)
  - RENDERING SERVER SIDE FOR SEO. THIS IS A BIG DEAL.
  - Server-side means I can still have it update at midnight-ish for twitter/rss/whatnot. I think the AWS instance I set aside for this is in the East, remember to offset for the hour EST.
  - Why can't server.js be in ES6? I have to put it in the .esignore to make the linter happy
  - Watch the repo for eslint-config-airbnb for that update that makes it eslint@2.2 compatible. Any day now.
  - Support for double-headers (remove the [0] from filter, reconfigure the state to hold two objects in an array and check both for times, or I guess put the data so .time just says both? That seems dumb.)
  - Obvs. get an actual schedule and put it in the server.js where the array lives.
  - Look into the csv to json build tools I saw just so I don't spend a bunch of time converting the dates.
  - Does milligram's grid suck? Really? Because it might. I'm having to explicitly include a bunch of classes that I really feel I shouldn't. So look into FBG or something just for the grid. Is that all I'm using it for?
  - Its lack of DRY because it's vanilla and not sass is enough on my nerves I think. I'm loading node-sass for a reason. 
  - This. Is. Responsive. But. Not. Pretty. The text has got this crazy wide gutter on mobile that looks weird.
  - After I get webpack, add an autoprefixer. This is too simple to break because I'm in love with flexbox.
  - The about page should actually have stuff in it.
  - Favicon.
  - Title.
  - Grey body text.
  - Logic for when it's turned off for the season.
