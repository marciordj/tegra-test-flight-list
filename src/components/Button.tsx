import React from 'react';
import * as ReactRedux from 'react-redux';
import { changeColor } from '../redux/reducers/changeColor';


export default function MyButton() {
  const dispatch = ReactRedux.useDispatch();
  const color = ReactRedux.useSelector((state) => state.changeColor.color);

  function handleClick() {
    const action = changeColor();
    dispatch(action);
  }

  console.log(color);

  return (
    <button style={{ backgroundColor:color }} onClick={() => handleClick()}>Teste</button>
  )
}