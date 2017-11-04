import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import testAction from '../actions/test-actions'

import './App.scss'

@connect(
  state => ({
    test: state.test,
  }),
  dispatch => ({
    testAction: bindActionCreators(testAction, dispatch),
  }),
)

export default class App extends PureComponent {
  static propTypes = {
    testAction: PropTypes.func.isRequired,
    test: PropTypes.shape({
      text: PropTypes.string,
    }).isRequired,
  }

  componentDidMount() {
    this.props.testAction('Live and kicking !!!!')
  }

  render() {
    const { test } = this.props
    return <div>{test.text}</div>
  }
}
