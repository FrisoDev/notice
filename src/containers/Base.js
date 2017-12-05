import React, { PureComponent } from 'react'
import Header from './Header'
import './Base.css'
import { connect } from 'react-redux'

class Home extends PureComponent {
  render() {
    return (
      <div className="pageContent">
        <Header />
      </div>
    )
  }
}
