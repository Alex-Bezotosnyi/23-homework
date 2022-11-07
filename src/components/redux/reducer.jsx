import {ADD_POST} from "./actions";
import PostsData from "../apps/PostsData";

const initialState = {
    posts: PostsData,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const posts = [...state.posts, action.payload]
            return {
                ...state,
                posts,
            }
        case "HANDLE_LIKE":
            return {
                ...state,
                clickedLike: state.clickedLike + action.payload,
            }
        case "HANDLE_COMMENT":
            return {
                ...state,
                clickedComment: state.clickedComment + action.payload,
            }
        case "HANDLE_REPOST":
            return {
                ...state,
                clickedRepost: state.clickedRepost + action.payload,
            }
        default:
            return state;
    }
}