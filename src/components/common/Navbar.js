import React from 'react'
import { Link, withRouter } from 'react-router-dom'


class Navbar extends React.Component {
  state = { navbarOpen: false }
  
  // Used to open or close the navbar
  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  
  // Used to close the navbar when route changes
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    const { navbarOpen } = this.state
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">🥼 //TODO: QUIZ</Link>
            <a className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/fact">Nerd Fact</Link>
              <Link className="navbar-item" to="/quote">Nerd Quote</Link>
              <Link className="navbar-item" to="/joke">Nerd Joke</Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Navbar)