import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import App from './app'
import rootReducer from './redux'

const store = createStore(
  rootReducer,
  devToolsEnhancer()
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
