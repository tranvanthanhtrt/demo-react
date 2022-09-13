import { FAILURE, IAction, LOGIN_ACTION_TYPE, REQUEST, SUCCESS } from "../action/action-types";
const initState = {
    data: null,
    loading: false,
    success: false,
}
export type LoginState = Readonly<typeof initState>;

export const authReducer = (state: LoginState = initState, action: IAction): LoginState => {
    switch (action.type) {
        case LOGIN_ACTION_TYPE.LOGIN_PENDING:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_ACTION_TYPE.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action?.payload?.data
            }
        case LOGIN_ACTION_TYPE.LOGIN_REJECTED:
            return {
                ...state,
                loading: false,
                success: false,
            }
        default:
            return state;
    }
}