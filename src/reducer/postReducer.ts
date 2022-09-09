import { FAILED, IAction, POST_ACTION_TYPE, REQUEST, SUCCESS } from "../action/action-types";
const initState = {
    data: null,
    loading: false,
    success: false,
}
export type PostState = Readonly<typeof initState>;

export const postReducer = (state: PostState = initState, action: IAction): PostState => {
    switch (action.type) {
        case REQUEST(POST_ACTION_TYPE.GET_POSTS):
            return {
                ...state,
                loading: true,
            }
        case SUCCESS(POST_ACTION_TYPE.GET_POSTS):
            return {
                ...state,
                loading: false,
                data: action?.payload?.data
            }
        case FAILED(POST_ACTION_TYPE.GET_POSTS):
            return {
                ...state,
                loading: false,
                success: false,
            }
        default:
            return state;
    }
}