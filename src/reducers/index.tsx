const INITIAL_STATE = {
    countries: [],
    country:[]
}

export const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'GET_COUNTRIES':
            return { ...state, countries: action.payload }
        case 'GET_COUNTRY':
            return {...state, country: action.payload}
        default:
            return state;
    }
}