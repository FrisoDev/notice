import React, { PureComponent } from 'react'
import Header from './Header'
import { connect } from 'react-redux'

class Base extends PureComponent {
  render() {
    return (
      <div className="pageContent">
        <Header />
      </div>
    )
  }
}

export default Base
