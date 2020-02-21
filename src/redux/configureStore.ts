import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';


import flightListReducer from './reducers/airportsList';






const rootReducer = Redux.combineReducers({
  flightList: flightListReducer,
});





export type IAppState = ReturnType<typeof rootReducer>;

const store = Redux.createStore(rootReducer, ReduxDevTools.composeWithDevTools(Redux.applyMiddleware(ReduxThunk)));


export default store;