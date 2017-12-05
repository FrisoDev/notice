import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Navigation from './components/ui/Navigation'
import Routes from './routes'
import Footer from './components/ui/Footer'

class App extends Component {

  render() {
    return (
        <div className="App">
          <Navigation />
          <Routes />
          <Footer />
          </div>
    )
  }
}

export default App
