import { AxiosResponse } from "axios";

export const LOGIN_ACTION_TYPE = {
    LOGIN_PENDING: 'LOGIN_PENDING',
    LOGIN_SUCCESS: 'LOGIN_FULFILLED',
    LOGIN_REJECTED: 'LOGIN_REJECTED',
}
export const POST_ACTION_TYPE = {
    GET_POSTS: 'GET_POSTS',
};

export interface IAction {
    type: string;
    payload?: any
}

export const REQUEST = (actionType: string) => `${actionType}_PENDING`;

/**
 * Appends SUCCESS async action type
 */

export const SUCCESS = (actionType: string) => `${actionType}_FULFILLED`;

/**
 * Appends FAILURE async action type
 */

export const FAILURE = (actionType: string) => `${actionType}_REJECTED`;