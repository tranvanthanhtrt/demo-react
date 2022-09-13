import { configureStore } from '@reduxjs/toolkit';
import { authReducer, LoginState } from "../reducer/authReducer";
import { combineReducers, Middleware, compose, applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";
// import thunkMiddleware from "redux-thunk";
import { postReducer, PostState } from "../reducer/postReducer";
import { useDispatch } from "react-redux";
// import thunk from 'redux-thunk';

export interface IRootState {
    readonly authReducer: LoginState;
    readonly postReducer: PostState;
}
const rootReducer = combineReducers<IRootState>({
    authReducer,
    postReducer
});


export const store = createStore(rootReducer, applyMiddleware(promiseMiddleware));
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>

