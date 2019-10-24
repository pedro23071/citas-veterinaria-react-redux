const initialState = {
    cita: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'AGREGAR_CITA':
            return{
                ...state,
                cita: [...state.cita, action.payload]
            }
        case 'BORRAR_CITA':
            return{
                ...state,
                cita: state.cita.filter(cita => cita.id !== action.payload)
            }
        default:
            return state;
    }
}