import * as actions from '../actions/actionTypes';

const intialState = {
    isLoggedIn: false,
    isPending: false,
    isSuccess: false,
    isRejected: false,
    user: {
        username: "",
        level_id: null,
        token: ""
    },
    msg: "",
};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case actions.LOGGED_IN + actions.PENDING:
            return {
                ...state,
                isPeding: true,
                msg: "...Loading",
            };
        case actions.LOGGED_IN + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                isPending: false,
                msg: "Login failed..!",
            };
        case actions.LOGGED_IN + actions.FULFILLED:
            if (action.payload.data.isSuccess) {
                return {
                    ...state,
                    isLoggedIn: true,
                    isSuccess: true,
                    isPending: false,
                    user: {
                        ...state.user,
                        username: action.payload.data.data.username,
                        level_id: action.payload.data.data.level_id,
                        token: action.payload.data.data.token,
                    },
                    msg: action.payload.data.data.msg
                };
            } else {
                return {
                    ...state,
                    isSuccess: false,
                    isPending: false,
                    isLoggedIn: false,
                    msg: action.payload.data.data.msg,
                };
            }
        default:
            return state;
    }
};

export default authReducer;