If you happen to be the one or two people who read this blog semi-regularly you probably know that I host this entire website on Github Pages. This has normally worked out alright in the past, I have had some issues here and there but nothing that I would blame on the system but instead on my knowledge of Git.

However, recently I had an issue where I wanted to add a small <var>.mp4</var> file to include it in a recent blog post but git push kept failing. All the researching I did couldn't narrow down the issue so I gave in and emailed Github support. They too couldn't tell me what was wrong with my push. It was only until about the 10th git push failed that it finally gave me something useful to go off of. Apparently, Github does not allow users to push more than 100MB in one go.

This got me fairly angry because I had wasted so much time trying to push these changes to Github and I find out that a feature Github shipped weeks ago (LFS) hasn't actually shipped to users everywhere.

Even thought it is working now I am still considering how I am hosting this blog and I will seriously consider moving this blog over to a dedicated server. Maybe even just a basic NodeJS server with Express on DigitalOcean to keep it cheap. If you have any suggestions on how I can use Git and also host a static file blog for free or for really cheap please let me know!
