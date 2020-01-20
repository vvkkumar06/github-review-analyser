import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware} from 'redux';
import { Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';
import rootReducers from './reducers'

const store = createStore(rootReducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));


serviceWorker.unregister();
