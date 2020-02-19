import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';

import changeColorReducer from './reducers/changeColor';
import listagemDeAeroporto from './reducers/listarAviao';
const rootReducer = Redux.combineReducers({
  changeColor: changeColorReducer,          //aqui coloca os reducers feitos, usando o combine
  listaDeAeroportos: listagemDeAeroporto
});





export type IAppState = ReturnType<typeof rootReducer>;

const store = Redux.createStore(rootReducer, ReduxDevTools.composeWithDevTools());


export default store;