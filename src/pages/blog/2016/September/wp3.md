<p>
    This weekend was basically 80% spent working on projects. Saturday I re-configured my personal website (this one!) to have all my styling be done in PostCSS. Previously I was using Sass compiled to css, but figured that I wanted to get back to writing what will be the future of css. I am a bit upset that PostCSS compiles my 'future' css into css that is made for browsers in the early 2000's, it just isn't progressive enhancement.
</p>
<p>
    I am however also considering moving my website over into a React-based website. I know that it will significantly slow down my website because I won't be server-rendering the React at all, however I think I will implement it as a behind the scenes variant of my website. My goal then would be to have a few different versions of my site, one being the current version that is really quick to load on any device, one that is all React based, and maybe a third that uses web components for everything.
</p>
<p>
    I also started yet another project, this time building on top of my <a href="https://goexploring.today/boilerplate">boilerplate</a> project that is a React, Redux, React Router, and PostCSS based, all using Webpack for the building of the assets.
</p>
<p>
    Sunday I mostly worked on client projects and also worked on this simple little toggle below.
</p>
<p>
    For the toggle I tried to make it easy to use, user friendly and also as usable as possible on other browsers. To see it in its full glory you might want to use chrome, but it should work perfectly fine in any other browser.
</p>


```CSS
[css-label] {
  width: 8rem;
  height: 4rem;
  border-radius:  25%/50%;
  position:  relative;
  background-color: var(--light-graystring) ;
  z-index:  1;
  overflow:  hidden;
  box-shadow:  0 0 .5rem .125rem rgba(0,0,0,.2);
  display:  inline-block;
}
[css-toggle] {
  outline:  none;
  appearance:  none;
  -webkit-appearance:  none;
  position:  absolute;
  width:  4rem;
  height:  4rem;
  background-color: var(--light-gray) ;
  border-radius:  50%;
  top:  0;
  left:  0;
  padding:  0;
  margin:  0;
  transition:  all .5s ease-in-out;
}
[css-toggle]:checked {
  left: 4rem;
  background-color: var(--green) ;
  transition:  all .5s ease-in-out;
  box-shadow:  0 0 .5rem 0.1125rem rgba(0,0,0,.3);
}
[css-toggle]:after {
  position:  absolute;
  left:  50%;
  top:  0;
  bottom:  0;
  width:  6rem;
  background-color: var(--dark-gray) ;
  content:  '';
  display:  inline-block;
  z-index:  -1;
}
```

```HTML
<label for="toggle" css-label>
  <input id="toggle" type="checkbox" css-toggle />
</label>
```

<p>
    You might notice that this sort of relies upon a small hack, one in that Chrome happens to support <code class="inline-block">input[type="checkbox"]:after</code>. I don't know if other browsers happen to support this or not.
</p>
<p>
    Either way I feel like I had a fairly productive weekend, and I think next weekend I will be working on making my website, or maybe just my blog to be React based.
</p>
