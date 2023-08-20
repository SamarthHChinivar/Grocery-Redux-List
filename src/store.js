import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ListReducer } from './reducers/ListReducer';

const reducers = combineReducers({
    //Contains all the reducers
    List: ListReducer
});

const initialState = {};
const middleware = [thunk];

export const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);