import React from 'react';
import * as ReactRedux from 'react-redux';  
import store from '../redux/configureStore';
import './App.css';

import HeaderTitle from './Header';

function App() {
  return (
    <ReactRedux.Provider store={store}>  
      <div className="App">
      <HeaderTitle />
      </div>
    </ReactRedux.Provider>
  );
}

export default App;





//<ReactRedux.Provider store={store}> conhecta o redux com o react
