import React from 'react';
// import * as ReactRedux from 'react-redux';
// import { changeColorAction } from '../../../../redux/reducers/changeColor';
// import { IAppState } from '../../../../redux/configureStore';


export default function ConfirmButton() {
  // const dispatch = ReactRedux.useDispatch();
  // const color = ReactRedux.useSelector((state: IAppState) => state.changeColor.color);   //quando se coloca toda função na mesma linha, o return é "Automatico"

  // function handleClick() {
  //   const colors = ['blue', 'purple', 'orange', 'red', 'green', 'yellow']
  //   const random = Math.floor(Math.random() * colors.length - 1); 

  //   const currentColor = colors[random];
    
  //   const action = changeColorAction(currentColor);
  //   dispatch(action);
  // }

  return (
    <button>Enviar</button>
  )
}