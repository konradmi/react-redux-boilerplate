import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Route path='/app' component={App} />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
)
