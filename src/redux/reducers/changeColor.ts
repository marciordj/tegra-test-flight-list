
const INITIAL_STATE = {
  color: 'white',
};



//Reducer
export default function reducer(state = INITIAL_STATE, action:any) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        color: action.color
      }
      break;
    case 2:
      console.log('e 2');
      break;
    default:
      return state;
  }
}



//ACTION = CRIA A "REGRA" DO REDUCER
export function changeColor() {
  return {
    type: 'CHANGE_COLOR',
    color: 'red'
  }
}