This past week went by so quickly, or at least it did until Friday when it slowed down to an infinite crawl with each second feeling like it lasted minutes. The main reason it felt like en eternity on Friday was because most of the people at work had taken PTO to make the three day weekend a four day weekend.

### Ideas:

This week I had several ideas, some of which I am still actively pursuing and some I think I will just think over for a little while longer. The first one was to implement a choose your own adventure story on the web. I found something that sort of acted like this but for problem solving git issues, where you go through answering questions and each answer takes you to another location on the same document. I would want to add some sort of web design on top of that so I think if I use the css property <code>:target</code> I could have a large collection of full screen layers all with 'deep' z-index values and when they are targeted I can make their z-index rise above the rest of the context, or I could just set all their height's to 0 and that way I can animate them scaling up. Just some thoughts, the main blocker on this idea is lacking any creativity and artistry to actually make this[^1].

I also had another idea which I might not actually go through with. It occurred to me as I was thinking over the CSS Houdini spec and also the idea of Custom Elements in HTML, that one could build a browser completely with JS, and then implement every component of the web standard in a set of Javacript classes. So you have a class for the DOM, or rather the window object. Within this class you have variables stored such as a tree object representing the DOM. and each element is based off of a base HTML Element class. If you implement the web standards in this way you could technically 'polyfill' every part of the web spec, and simultaneously allow developers to easily hack on the standards by extending these classes, or even just creating new implementations of the classes.

Finally, I have been working on some other side projects, mostly the regular old projects but, just while writing this post I also quickly implemented a simple little hover footnote tool which you can see by hovering over that 1 up there above!

### Health:

I don't have too many updates on health this week. I have been drinking my 100% food powder for lunch every day, and I am seriously thinking about buying a Soylent subscription.

This was my first ever weekly recap, I plan on adding a lot more content to each of these posts, and I think I might also start to write some article responses to the various articles I read online each day.


---
#### Footnotes:
[^1]: If you are a designer/artist/someone who has an idea for a choose your own adventure story, feel free to reach out to me and we can collaborate to make one on the web!
