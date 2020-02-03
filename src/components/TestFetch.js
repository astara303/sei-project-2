// Used to test the quiz API and how many questions were availalbe. Not used in productuin.
import React from 'react'
import axios from 'axios'

class TestFetch extends React.Component {
  
  async loopIt() {
    const obj = {}
    for (let i = 9; i <= 32; i++) {
      try {
        const res = await axios.get(`https://opentdb.com/api_count.php?category=${i}`)
        obj[i] = res.data.category_question_count
      } catch (err) {
        console.log(JSON.parse(obj))
      }
    }
    console.log(obj)
  }
  
  
  
  render() {
    return <button className="button is-large is-fullwidth" onClick={this.loopIt}></button>
  }
}

export default TestFetch