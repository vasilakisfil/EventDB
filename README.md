# EventDB

EventDB is a web application in which everyone can post anything. Although it
could easily be transformed in a spam hoover, it features mechanisms that a
case of a spam bot is avoided.

EventDB is **NOT** yet another social network but it suplements the existing
OSNs in a unique way.

Traditional web search engines haven't changed in the past 14 years. Yet,
the use of internet has changed dramatically.

Using EventDB's vast database you can search for any event in a given place
or time of a specific category or using tags. This would have a tremendous
effect on numerous applications:

**You can post or find new hot places!**
Have you recently went to a nice place that you would like to share? Here is
your your opportunity. On the other hand using EventDB's advanced search engine
you can find a new places that meets all your requirements!

**You can find your missing dog.**
Using other's people coinsidence you can find your dog. When you see a stray dog
just post its location and its physical characteristics. You might be helping
someone else who is looking for its own dog (or cat, or air matress or...)

**You can follow a thief's path**
Haven't you ever notice suspicious moves of a stranger near a house/car etc or
suspicious running in the metro? Well you should report it in EventDB, maybe
these suspicious moves have to do with a robbery or a theft. In that way you
could help other people or even the police!



By broswing EventsDB's database and tags you can find stories that have in common
with your eperience. Thus, you can create new friends who have same experiences
and interests with you!


**Popular events are positevely reinforced**
Events that have a numerous audience (events with very high degree), or events that
have popular audience (edges with a high weight) tend to become more popular and
as a result they are featured in the map.


# For Developers
EventDB was built following the process of Test Driven Development(TDD), that is test
almost everything. The code is written using Ruby on Rails framework with a couple
more tools in order to facilitate the development:

**Rspec** and **Capyvara** for test driven development inside the Rails

**Jasmine** for test driven development in the javascript section

**SASS** (Syntactically Awesome Stylesheets) which is a CSS metalanguage offering a bunge of
feature CSS don't have such as nesting, variables, functions, mixins and much more..

**Twitter Bootstrap** framework in order to flavor the markup

**HAML**  is used as markup language instead of eRuby that is included in rails in the next few commits.

**Strictly Unibtrusive** javascript and AJAX because otherwise things can get really ugnly. Also Modular Pattern is used
followed by [this](http://www.dustindiaz.com/javascript-private-public-privileged/) post.

**JSON** is used in order to pass data from ruby to javascript and back.

# To Do List
* Add support for friends and followers
  * Add support for private, semi-private(public in friends) and public events
  * Add support for circles of friends
* Add support for bitly urls in events
* Add linkage capability among events
* ...



