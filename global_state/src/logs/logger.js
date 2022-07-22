const logger = (reducer) => {
    return (state, action) => {
        console.group(action.type);
        console.log("PrevState : ", state);
        console.log("Action : ", action);
        const newState = reducer(state, action);
        console.log("NewState : ", newState);
        console.groupEnd();
        return newState;
    }
}

export default logger;