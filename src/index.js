import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import StoreConfig from './store/ConfigStore'

const ProviderComponent = () => {
  const store = StoreConfig();
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <ProviderComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
