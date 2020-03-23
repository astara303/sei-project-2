// Component used as home screen and to start quiz.
// Component is routed to / and located on the logo of the navbar
// classNames based on bulma box documentation found here https://bulma.io/documentation/elements/box/
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title has-text-white is-1">{'//TODO: QUIZ'}</h1>
        <h2 className="subtitle has-text-white is-4 has-text-weight-bold">The site for programmers and nerds</h2>
        <Link to={'/quiz'}>
          <button className="subtitle button">QUIZ</button>
        </Link>
      </div>
    </div>
  </section>

)

export default Home