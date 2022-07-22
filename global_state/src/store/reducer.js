import * as types from './actions'
export const reducer = (state, action) => {
    switch (action.type) {
        case types.GET_USERS_START:
            return { ...state, loading: action.loading }
        case types.GET_USERS_SUCCESS:
            return { ...state, loading: action.loading, users: action.data }
        case types.GET_USERS_ERROR:
            return { ...state, loading: action.loading, error: action.error}
        default:
            return state
    }
}

