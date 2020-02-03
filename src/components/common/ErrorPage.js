//Component used to show an error in the case that a component does not properly load
import React from 'react'

const ErrorPage = () => (
  <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <p className="title has-text-white is-1 has-text-centered">Oops, something went wrong. Please try again later.</p>
      </div>
    </div>
  </section>
)

export default ErrorPage