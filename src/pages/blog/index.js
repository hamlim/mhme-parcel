import React, { Fragment, Component } from 'react'
import Container from '../../components/container.js'

// Rendering an empty span because of this bug in react transition group
// https://github.com/reactjs/react-transition-group/issues/208
const Null = () => <span />

class Blog extends Component {
  state = {
    Match: Null,
    Link: Null,
    Breadcrumbs: Null,
    TwentyFifteen: Null,
    TwentySixteen: Null,
    TwentySeventeen: Null,
    TwentyEighteen: Null,
  }
  componentDidMount() {
    Promise.all([
      import('@reach/router'),
      import('../../components/breadcrumbs.js'),
      import('./2015/index.js'),
      import('./2016/index.js'),
      import('./2017/index.js'),
      import('./2018/index.js'),
    ]).then(
      ([
        { Link, Match },
        { default: Breadcrumbs },
        { default: TwentyFifteen },
        { default: TwentySixteen },
        { default: TwentySeventeen },
        { default: TwentyEighteen },
      ]) => {
        this.setState({
          Match,
          Link,
          Breadcrumbs,
          TwentyFifteen,
          TwentySixteen,
          TwentySeventeen,
          TwentyEighteen,
        })
      },
    )
  }
  render() {
    const {
      Link,
      Breadcrumbs,
      TwentyFifteen,
      TwentySixteen,
      TwentySeventeen,
      TwentyEighteen,
    } = this.state
    return (
      <Container>
        <Breadcrumbs />
        <TwentyFifteen path="/blog/2015" />
        <TwentySixteen path="/blog/2016" />
        <TwentySeventeen path="/blog/2017" />
        <TwentyEighteen path="/blog/2018" />
        <Match path="/blog">
          {r =>
            r.match && (
              <Fragment>
                <h3>Years:</h3>
                <ul>
                  <li>
                    <Link to="/blog/2015">2015</Link>
                  </li>
                  <li>
                    <Link to="/blog/2016">2016</Link>
                  </li>
                  <li>
                    <Link to="/blog/2017">2017</Link>
                  </li>
                  <li>
                    <Link to="/blog/2018">2018</Link>
                  </li>
                </ul>
              </Fragment>
            )
          }
        </Match>
      </Container>
    )
  }
}
export default Blog
