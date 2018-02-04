## This is a test

I wanted to see if I can `fetch` markdown content from the browser, we will see what happens when I do!


Ok I think it works, this is pretty cool, I wonder if I can shift most of my plain blog posts over to this
kind of format. 🤔


Obviously I can't do a lot of my interesting design-y things that I have done with some of my posts. But
this could serve as a method to simply post a plain old blog post with no fancy features.

So here is the code that pulls this off:

``` Javascript
import React, {Component} from 'react';
import marked from 'marked';
import './post.css';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      markdown: ''
    }
  };
  componentDidMount = () => {
    let postUrl = `/raw/${this.props.year}/${this.props.month}/${this.props.title}`;
    window.fetch(postUrl).then(data => {
      data.text().then(md => {
        this.setState({
          loading: false,
          markdown: md
        });
      });
    }).catch(err => console.warn(err));
  };
  render = () => (
    <article
      className={ this.state.loading ? 'loader' : 'Post'}
      dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
    ></article>
  )
}
export default Post;
```

It is actually quite messy (I could probably do all of it as a stateless functional component but figured state would
  be a bit more helpful)


Now for an interesting test, what happens when I write some html within my markdown file?

<p class="lead">This is a lead</p>

It works!

Maybe I can do all the design-y things I do in some other posts.
