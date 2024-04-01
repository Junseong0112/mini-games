import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './styles/index.css'
import { Provider } from 'react-redux'
import rootReducer from './redux/store'
import { createStore } from 'redux'

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
