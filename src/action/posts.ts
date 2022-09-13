import { getAllPosts } from "../service/posts";
import { IAction, POST_ACTION_TYPE } from "./action-types";

export const getAllPostsAction = () => ({
    type: POST_ACTION_TYPE.GET_POSTS,
    payload: getAllPosts()
});
// export const getAllPostsAction = (dispatch: any) => async () => {
//     const data = await getAllPosts()
//     dispatch(getAllPostsSuccess(data));
// };