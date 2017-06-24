import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const App = () => {
  const store = createStore((s, a) => {}, {})

  return (
    <Provider store={store}>
      <div>Test Component</div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
