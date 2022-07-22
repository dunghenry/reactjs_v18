import useReducer from "./useReducer"
import { useEffect } from "react";
import axios from "axios";
import logger from "./logger";
const fetchReducer = (state, action) => {
    switch (action.type) {
        case 'fetchAPI/start':
            return {
                ...state,
                loading: action.loading,
            }
        case 'fetchAPI/success':
            return {
                ...state,
                loading: action.loading,
                data: action.data,
            }
        case 'fetchAPI/failure':
            return {
                ...state,
                loading: action.loading,
                data: action.data,
                error: action.error
            }
        default:
            return state
    }
}

const useFetch = (url) => {
    const [state, dispatch] = useReducer(logger(fetchReducer), {
        loading: false,
        error: true,
        data: []
    })
    useEffect(() => {
        (async () => {
            dispatch({
                type: 'fetchAPI/start',
                loading: true,
            })
            try {
                const response = await axios.get(url);
                dispatch({
                    type: 'fetchAPI/success',
                    data: response.data,
                    loading: false
                })
            } catch (error) {
                dispatch({
                    type: 'fetchAPI/failure',
                    data: [],
                    loading: false,
                    error: true,
                })
            }
        })()
    }, [url])
    return { ...state }
}
export default useFetch;