import { AxiosResponse } from "axios";

export const LOGIN_ACTION_TYPE = {
    LOGIN: 'LOGIN',
}
export const POST_ACTION_TYPE = {
    GET_POSTS: 'GET_POSTS',
};

export interface IAction {
    type: string;
    payload?: AxiosResponse
}
export const REQUEST = (actionType: string) => actionType + '_PENDING';
export const SUCCESS = (actionType: string) => actionType + '_FULFILLED';
export const FAILED = (actionType: string) => actionType + '_REJECTED';