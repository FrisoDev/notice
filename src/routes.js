import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import UserProfile from './containers/userProfile/UserProfile'

import {
  Base,
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
       <Route exact path="/"        component={Base} />
      </div>
    )
  }
}
