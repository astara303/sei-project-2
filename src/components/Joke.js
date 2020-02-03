//Component used to show a programming joke
//Component is routed to /joke, located on the nav bar and pulled into results page.
import React from 'react'
import axios from 'axios'

class Joke extends React.Component {
  state = {
    setup: '',
    delivery: '',
    joke: ''
  }

  //Joke will either pull setup and delivery or joke. Never both.
  //blacklistFlags=nsfw,religious,political is a content filter. To understand documentation is found here: https://sv443.net/jokeapi
  async componentDidMount() {
    try {
      const res = await axios.get('https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw,religious,political')
      this.setState({ joke: res.data.joke, setup: res.data.setup, delivery: res.data.delivery })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  //this.state.[] && is used as some jokes are one line joke and some are two line setup and delivery. Using this means we only display relevant divs
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="is-mobile is-multiline box">
            <h1 className="title is-2 has-text-centered">Joke Time!</h1>
            <div>{this.state.joke && <h2 className="has-text-centered title is-5 has-text-weight-light">{this.state.joke}</h2>}</div>
            {this.state.setup &&
              <div>
                {this.state.setup && <h2 className="has-text-centered title is-5 has-text-weight-light">{this.state.setup}</h2>}
                <hr />
              </div>}
            <div>{this.state.delivery && <h2 className="has-text-centered title is-5 has-text-weight-light">{this.state.delivery}</h2>}</div>
          </div>
        </div>
      </section>
    )
  }
}
export default Joke