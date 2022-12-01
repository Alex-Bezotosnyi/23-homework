import {useSelector} from "react-redux";
import CreatePost from "../CreatePost/CreatePost";
import PostItem from "../PostItem/PostItem";
import PostsCSS from "./Posts.module.scss";

function PostsModule() {
    const posts = useSelector((state) => state.posts);
    return (
        <div className={PostsCSS.wrapper}>
            <div className={PostsCSS.wrapper__posts}>
                {posts.map((post) => (
                    <PostItem key={post.author} {...post} />
                ))}
            </div>
            <CreatePost />
        </div>
    )
}

export default PostsModule;