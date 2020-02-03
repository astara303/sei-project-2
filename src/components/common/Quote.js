// Component used to show a quote from the programming-quotes-api
import React from 'react'
import axios from 'axios'

class Quote extends React.Component {
  state = { 
    quote: '',
    author: '',
    source: ''
  }

  // JSON object return creating three keys, quote, author, source. Full documentation found here: https://programming-quotes-api.herokuapp.com/
  async componentDidMount()  {
    try {
      const res = await axios.get('https://programming-quotes-api.herokuapp.com/quotes/random/lang/en')
      this.setState({ quote: res.data.en, author: res.data.author, source: res.data.source })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }
  
  render() {
    console.log('render')
    return (
      <section className="section">
        <div className="container">
          <div className="is-mobile is-multiline box">
            <h1 className="title is-2 has-text-centered">Nerdy Quote</h1>
            <div>
              <h2 className="title is-5 has-text-weight-light">"{this.state.quote}"</h2>
              <h3 className="title is-4 has-text-weight-light">-{this.state.author}</h3>
              <h4 className="title is-6 has-text-weight-light">{this.state.source}</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Quote