import { configureStore } from '@reduxjs/toolkit';
import { authReducer, LoginState } from "../reducer/authReducer";
import { combineReducers, Middleware, compose, applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import thunkMiddleware from "redux-thunk";
import { postReducer, PostState } from "../reducer/postReducer";
import { useDispatch } from "react-redux";
import thunk from 'redux-thunk';

export interface IRootState {
    readonly authReducer: LoginState;
    readonly postReducer: PostState;
}
const rootReducer = combineReducers<IRootState>({
    authReducer,
    postReducer
});

const defaultMiddlewares = [
    thunkMiddleware,
    promiseMiddleware,

];

const composedMiddlewares = (middlewares: Middleware<string, string>[]) =>
    compose(applyMiddleware(...defaultMiddlewares, ...middlewares));

const initialize = (initialState?: IRootState, middlewares = []) => createStore(rootReducer, initialState, composedMiddlewares(middlewares));

// export const store = configureStore({
//     reducer: {
//         authReducer: authReducer,
//         postReducer: postReducer,
//     },
//     middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat()
// });
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>

