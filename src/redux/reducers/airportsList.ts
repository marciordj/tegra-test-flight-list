const GET_AIRPORTS_PENDING = '@airports/HTTP_GET_AIRPORTS_PENDING';
const GET_AIRPORTS_SUCCESS = '@airports/HTTP_GET_AIRPORTS_SUCCESS';
const GET_AIRPORTS_ERROR = '@airports/HTTP_GET_AIRPORTS_ERROR';

interface IState {
  isFetching: boolean,
  hasErrors: boolean,
  airportsList: any
}

const INITIAL_STATE: IState = {
  isFetching: false,
  hasErrors: false,
  airportsList: []
}

//É UM REDUCER
export default function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case GET_AIRPORTS_PENDING: {
      return {
        ...state, //copia todo o estado de initial state e em baixo sobreescreve o isFatching
        isFetching: true,
      }
    }

    case GET_AIRPORTS_SUCCESS: {
      return {
        isFetching: false,
        hasErrors: false,
        airportsList: action.payload.airportsList
      }
    }

    case GET_AIRPORTS_ERROR: {
      return {
        isFetching: false,
        hasErrors: true,
        airportsList: INITIAL_STATE.airportsList
      }
    }

    default:
      return state;
  }
}



//É UMA ACTION
export function getFlightListAction() {
  return async function (dispatch: any) {
    const getAirportsListPendingAction = {
      type: GET_AIRPORTS_PENDING,
      payload: null
    };
    dispatch(getAirportsListPendingAction);

    try {
      const url = 'https://api-voadora.dev.tegra.com.br/flight/companies';
      const response = await fetch(url);
      const airportsList = await response.json()

      const getAirportsListSuccessAction = {
        type: GET_AIRPORTS_SUCCESS,
        payload: {airportsList}
      }
      dispatch(getAirportsListSuccessAction);
    } catch (error) {
      const getAirportsListErrorAction = {
        type: GET_AIRPORTS_ERROR,
        payload: null
      }
      dispatch(getAirportsListErrorAction);
    }
  }

}