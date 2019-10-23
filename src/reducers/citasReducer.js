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
        default:
            return state;
    }
}