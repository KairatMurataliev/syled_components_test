import axios from '../../axios-api';
import config from '../../config'

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_ERROR = 'GET_USERS_ERROR';

export const getUsersSuccess = users => {
    return {type: GET_USERS_SUCCESS, users};
};

export const getUsersError = error => {
    return {type: GET_USERS_ERROR, error};
};

export const getUsers = () => {
    return dispatch => {
        return axios.get('search/users?q=location:Bishkek+followers:%3E34').then(response => {
            Promise.all(response.data.items.map(user => {
                return axios.get(`users/${user.login}?client_id=${config.clientId}&client_secret=${config.clientSecret}`)
            })).then((result => {
                const arrayUsers = result.map((user => user.data));
                dispatch(getUsersSuccess(arrayUsers))
            })).catch(error => {
                dispatch(getUsersError({message: error.response.data.message, status: error.response.status}))
            })
        }, error => {
            dispatch(getUsersError({message: error.response.data.message, status: error.response.status}))
        });
    }
};


