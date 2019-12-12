import {GET_USERS_ERROR, GET_USERS_SUCCESS} from "../actions/actions";

const initialState = {
    users: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {...state, users: action.users};
        case GET_USERS_ERROR:
            return {...state, error: action.error};
        default:
            return state
    }
};

export default reducer;
