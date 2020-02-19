import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';

import changeColorReducer from './reducers/changeColor';

const rootReducer = Redux.combineReducers({
  changeColor: changeColorReducer          //aqui coloca os reducers feitos, usando o combine
});




const store = Redux.createStore(rootReducer, ReduxDevTools.composeWithDevTools());


export default store;