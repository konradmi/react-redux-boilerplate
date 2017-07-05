import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { testAction } from '../actions'

import './App.scss'

@connect(
  (state, props) => ({
  	test: state.test
  }),
  dispatch => ({
    testAction: bindActionCreators(testAction, dispatch)
  })
)

export default class App extends PureComponent {

  componentDidMount() {
    this.props.testAction()
  }

  render() {
  	const { test } = this.props
    return <div>{test.text}</div>
  }
}
