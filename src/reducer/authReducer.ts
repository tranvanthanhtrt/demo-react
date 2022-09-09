import { FAILED, IAction, LOGIN_ACTION_TYPE, REQUEST, SUCCESS } from "../action/action-types";
const initState = {
    data: null,
    loading: false,
    success: false,
}
export type LoginState = Readonly<typeof initState>;

export const authReducer = (state: LoginState = initState, action: IAction): LoginState => {
    switch (action.type) {
        case REQUEST(LOGIN_ACTION_TYPE.LOGIN):
            return {
                ...state,
                loading: true,
            }
        case SUCCESS(LOGIN_ACTION_TYPE.LOGIN):
            return {
                ...state,
                loading: false,
                data: action?.payload?.data
            }
        case FAILED(LOGIN_ACTION_TYPE.LOGIN):
            return {
                ...state,
                loading: false,
                success: false,
            }
        default:
            return state;
    }
}