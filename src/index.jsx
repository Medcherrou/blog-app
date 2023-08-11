import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore , applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './components/App'
import reducers from './reducers'


const composeEnhanced = compose(applyMiddleware(thunk),composeWithDevTools())

const store = createStore(reducers,composeEnhanced)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
	</React.StrictMode>
)