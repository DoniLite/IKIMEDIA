import { useReducer } from "react";


export function UseHomeData() {
    function reducer(state, action) {
        if (action.type == 'UPDATE_DATA') {
            return state
        }
        console.log(state, action)
        return state
    }

    const [state, dispatch] = useReducer(reducer, {
        user: {
            name: 'user',
            isConnected: true,
            data:{}
        }
    })

    return {
        state,
        dispatch
    }
} 