import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(reducer, {}, enhancer);

export default store;
