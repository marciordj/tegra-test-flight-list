import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';


import airportsListReducer from './reducers/airportsList';






const rootReducer = Redux.combineReducers({
  airportsList: airportsListReducer
});





export type IAppState = ReturnType<typeof rootReducer>;

const store = Redux.createStore(rootReducer, ReduxDevTools.composeWithDevTools());


export default store;