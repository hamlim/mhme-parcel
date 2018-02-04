Although I have an extra day on this weekend, I figured I would get a jump start on a new blog series about the various projects I am working on during the weekends. I generally find that I can't work on side projects during the week before and after work because I am too tired and just want to sit back and relax after a long day of work. So I tend to fill my weekends with sitting in front of my computer display building out my collection of small websites as side projects. This weekend was no different than any other weekend, besides maybe feeling extra productive.

To start off the weekend I started work on designing and building a cleaner website for my brother Kyle. His current web presence was not only a few years out of date but also looked like it was built in the early 2000's. I started the project based off of my <a href="https://goexploring.today/boilerplate">boilerplate</a> project (which I also ironed out this weekend), and then simply started throwing out ideas onto the webpage with how I imagine his site should look. It is still really early on, and there is still no content on the site as I write this, but you can see the developer version of the site <a href="https://goexploring.today/kh-photography">here</a>.

My next project was fairly small and involved fixing up my projects listing page <a href="https://goexploring.today">goexploring.today</a>. My previous design for the site was really messy, and although I don't like how dramatic the site looks right now (see image below), I feel like I can live with that look for a while longer.

<figure class="figure">
<img src="/static/assets/images/posts/goexploring.png" alt="Goexploring.today landing page" class="img">
<figcaption class="horizontal--center">
    <h5>Goexploring.today landing page</h5>
</figcaption>
</figure>

My next project involved adding a landing page for my project called Colors. I decided to change the project up a bit and make a simple API that will project a feed of the color codes that I have selected, and then use those to populate the website in a clean manner. This project also started by cloning the boilerplate project mentioned above, then I looked into the service called <a href="https://zeit.co/now">now</a> which allows you to deploy simple nodejs apps to a server. I used this to make a simple API with a list of color hex codes I have hand picked out. I then used the new <code>fetch</code> API to get the color hex codes and rendered them all with react. You can see this project <a href="https://goexploring.today/colors">here</a>.

<figure class="figure">
<img src="/static/assets/images/posts/colors.png" alt="Colors" class="img">
<figcaption class="horizontal--center">
    <h5>Colors</h5>
</figcaption>
</figure>
