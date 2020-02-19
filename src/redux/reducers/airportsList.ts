const GET_AIRPORTS_SUCCESS = "@listAirports/HTTP_GET_AIRPORTS_SUCCESS"

const INITIAL_STATE = {
  aeroportos: [
     "Aeroporto Internacional Juscelino Kubitschek",
     "Aeroporto Eurico de Aguiar Salles",
     "Aeroporto Internacional Zumbi dos Palmares",
     "Aeroporto Internacional de Belém de Cans",
     "Aeroporto Internacional Hercílio Luz",
     "Aeroporto de Congonhas Paulo",
     "Aeroporto Internacional de Aracaju",
     "Aeroporto Internacional de Viracopos",
     "Aeroporto de Palmas",
     "Aeroporto da Pampulha",
  ]
}

export default function reducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case 'ADD_AEROPORTO':
      return {...state, aeroportos: [...state.aeroportos, action.title]};
    default:
      return state;
  }
}

export function getAirportAction() {
  return async function getAirports(dispatch: any) {
    
    try {
      const url = 'https://api-voadora.dev.tegra.com.br/flight/companies';
      const response = await fetch(url);
      const airports = response.json();
    
      const getAirportsSuccess = {
        type: GET_AIRPORTS_SUCCESS,
        payload: airports
      };
      dispatch(getAirportsSuccess)
    } catch (error) {
      console.log('Error')
    }
  }
}




