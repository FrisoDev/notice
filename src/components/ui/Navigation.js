import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import Reorder from 'material-ui/svg-icons/action/reorder'

class Navigation extends PureComponent {

  render() {
    return (
      <AppBar
        style=
        {{
          position: 'fixed',
          boxShadow: '0',
          left: '0',
          top: '0',
          color: 'white',
          textShadow:'-1px 0 black, 0 2px black, 1px 0 black, 0 -1px black',
          background: 'none',
        }}

     />
    )
  }
}


export default Navigation
