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

export default function listarAeroportos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_AEROPORTO':
      return {...state, aeroportos: [...state.aeroportos, action.title]};
    default:
      return state;
  }
}