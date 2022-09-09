import { login } from "../service/auth"
import { LOGIN_ACTION_TYPE } from "./action-types"

export const loginAction = async (username: string, password: string) => ({
    type: LOGIN_ACTION_TYPE.LOGIN,
    payload: login(username, password)
});
