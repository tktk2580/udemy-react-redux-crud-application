import React from 'react';
import ReactDOM from 'react-dom';
// storeを作成する
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import reducer from './reducers'
import App from './components/App';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
