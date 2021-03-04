let countNum = 6

export function countPlanet() {
    return function(dispatch) {
        dispatch({ type: 'COUNT_PLANET', payload: countNum })
    }
}

export function addOne() {
    return function(dispatch) {
        dispatch({ type: 'ADD_ONE', payload: ++countNum })
    }
}

export function minusOne() {
    return function(dispatch) {
        dispatch({ type: 'MINUS_ONE', payload: countNum > 0 ? --countNum : 0 })
    }
}
