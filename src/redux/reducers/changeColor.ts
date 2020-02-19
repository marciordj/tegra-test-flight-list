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
    default:
      return state;
  }
}



//ACTION = CRIA A "REGRA" DO REDUCER
export function changeColorAction(choicedColor: string) {
  return {
    type: 'CHANGE_COLOR',
    color: choicedColor,
  }
}