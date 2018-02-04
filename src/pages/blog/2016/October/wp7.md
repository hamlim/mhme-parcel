<p>
  This weekend was mostly spent working on this website, I made a few optimizations and also wrote a few blog posts as well!
  I wanted to do a lot more react work this weekend on this site and also on a few other projects, but I think I will start bringing
  my personal laptop to work to do some of that work on the train rides in the morning and afternoon.
</p>
<p>
  So this weekend what I did do is publish three new blog posts, the first of which was my 7th Weekly Recap which you can
  <a href="/post/Weekly-Recap-volume-7" data-css-link-article>read here</a>. I also published the <a href="/post/State-of-my-Projects" data-css-link-article>
    State of my Projects</a> which is a blog post that I will be updating with all my ongoing projects and project ideas from here
  on out.
</p>
<p>
  I also started a new blog post series which I am going to call Sunday Morning Recap, you can read the first one <a href="/post/Sunday-Morning-Recap-volume-1" data-css-link-article>here</a>.
  I know I have been starting more and more projects recently but this has been sitting in my head for a few weeks now and decided Sunday mornings would be an adequate
  time to start publishing this series. I would love any and all feedback you have about this new series either below in the comments (more about those below) or in the
  comments on that post, or just on twitter/sms/email!
</p>
<p>
  On the technical side of things, this weekend I updated some styles across this website including removing the need for a 3rd party font family (besides the monospace one I use)
  so I am now relying on a little trick I found <a href="https://bitsofco.de/the-new-system-font-stack/" data-css-link-article>here</a> where I set the <code class="inline-block">font-family</code>
  to the font names of base fonts shipped in many OS's.
</p>

```css
body {
  font-family: -apple-system,
               BlinkMacSystemFont,
               "Segoe UI",
               Roboto,
               Oxygen-Sans,
               Ubuntu,
               Cantarell,
               "Helvetica Neue",
               sans-serif;
}
```

<p>
  This allows me to cut down on the number of requests the browser has to make before loading the webpage, which I am a fan of. Soon I might
  cut out the need of even requiring a monospace font from Google Fonts. Although I will need to do some testing on what the default monospace
  fonts look like on most OS's.
</p>
<p>
  I also made the shift over to Atom this weekend, so now I am getting used to it over using Sublime, it offers many of the same useful tricks
  but I feel it is a bit better to hack on, and sort of lines up with me using Hyper terminal.
</p>
<p>
  As you can see below I also added Disqus commenting to some of my new blog posts, and will be adding them to all future blog posts. I did this
  to hopefully reduce the friction for readers to leave feedback on blog posts and also to increase the amount of communication between me, the author,
  and you, my audience. Let me know what you think about this either below in the comments or on twitter/sms/email! I was hesitant to add a comment system
  like Disqus mainly because so far my website has included zero JS, but now I unfortunately need to start including JS in the site.
</p>
<p>
  So that has been my weekend, let me know what your weekend was like below, work on anything exciting or go somewhere awesome? Let me know!
</p>
