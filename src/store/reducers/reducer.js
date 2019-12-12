import {GET_USERS_SUCCESS} from "../actions/actions";

const initialState = {
    users: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return {...state, users: action.users};
        default:
            return state
    }
};

export default reducer;
