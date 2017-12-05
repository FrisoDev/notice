import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Base from './containers/Base'

export default class Routes extends Component {
  render() {
    return (
      <div>
       <Route exact path="/"        component={Base} />
      </div>
    )
  }
}
