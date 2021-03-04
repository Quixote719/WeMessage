export default function counterReducer(state = {}, action) {
    switch (action.type) {
        case 'COUNT_PLANET':
            return {
                planetCount: action.payload
            }
        case 'ADD_ONE':
            return {
                planetCount: action.payload
            }
        case 'MINUS_ONE':
            return {
                planetCount: action.payload
            }
        default:
            return state
    }
}
