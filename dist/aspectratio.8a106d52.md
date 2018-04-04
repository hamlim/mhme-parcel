<p>
    I recently posted a few blog posts with YouTube embedded videos and also with my own video element on this blog, and while I was doing it I wanted to focus on making it look as pleasant as possible. I wanted to make sure the video was always in the correct aspect ratio but also wanted it to be full width on all displays. I did some searching around and only found some hacks on doing such things like wrapping it in a div with a specific padding-bottom and setting the embedded content to full width and full height.
</p>
<p>
    In order to not use one of these hacks I looked into using `calc();` to set my height as a multiple of my width. I found out that I could do the following:
</p>

```css
[css-video] {
  width: 100vw;
  height: calc(100vw * 1.75);
  margin-left: calc(-1 * var(--bp) / 2);
}
```
<p>
    If you are new to CSS variables and Calc that might look like a bit of a mess, but here is the layman expression. 1. We want the video to be full width, hence the 100vw. 2. We want the height to be 1.75 times the width, so since we set the width above, we can just use calc to multiply it by 1.75 (calc here will return a value in px units). 3. the margin-left here is because I have a set width of my blog posts, and depending on the breakpoint the width will be different and I want to pull the video to the far left of the display.
</p>
<p>
    If you are embedding your videos on your website and don't want to rely on hacks to set the width like the padding-bottom hack mentioned <a href="http://stackoverflow.com/a/10441480">here</a>. This can also be used for basically any element you want to preserve the ratio between height and width with.
</p>
