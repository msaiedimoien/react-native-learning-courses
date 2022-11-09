export const usersReducers = (state = {}, action) => {
    switch (action.type) {
        case "USER":
            return [...action.payload];
        default:
            return state;
    }
};