import { createContext, useReducer } from "react";
import { reducer } from "../store/reducer";
import logger from "../logs/logger";
export const StoreContext = createContext()
const Store = ({ children }) => {
    const initialState = {
        users: [],
        loading: false,
        error: false,
    }
    const [state, dispatch] = useReducer(logger(reducer), initialState)
    return <StoreContext.Provider value={[state, dispatch]}>
        {children}
    </StoreContext.Provider>
}

export default Store;