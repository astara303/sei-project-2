//Component used to show a random number fact
//Component is routed to /fact and located on the nav bar
import React from 'react'
import axios from 'axios'

class Fact extends React.Component {
  state = {
    quote: ''
  }
  
  //text based API. Can change the API call by changing /random and /trivia. Documentation can be found: http://numbersapi.com/#url-structure
  async componentDidMount() {
    try {
      const res = await axios.get('http://numbersapi.com/random/trivia/')
      this.setState({ quote: res.data })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  render() {
    console.log('render')
    return (
      <section className="section">
        <div className="container">
          <div className="is-mobile box">
            <h1 className="title is-2 has-text-centered">Number Fact</h1>
            <div>
              <h2 className="has-text-centered title is-5 has-text-weight-light">{this.state.quote}</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Fact