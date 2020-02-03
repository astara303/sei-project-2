import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './stylesheets/main.scss'

import Navbar from './components/common/Navbar'
import Start from './components/Start'
import Joke from './components/Joke'
import Quote from './components/common/Quote'
import Home from './components/common/Home'
import Timer from './components/common/Timer'
import Fact from './components/common/Fact'
import ErrorPage from './components/common/ErrorPage'


class App extends React.Component {
  render() {
    return ( 
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/quiz" component={Start} />
            <Route path="/quote" component={Quote} />
            <Route path="/joke" component={Joke} />
            <Route path="/timer" component={Timer} />
            <Route path="/fact" component={Fact} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

