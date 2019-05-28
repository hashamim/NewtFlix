import rootReducer from '../reducers/root_reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const middleWares = [thunk];
if (process.env.NODE_ENV !== 'production'){
    const { logger } = require('redux-logger')
    middleWares.push(logger);
}
export default () => (
    createStore(rootReducer,applyMiddleware(...middleWares))
);