import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addPost} from "../../../store/actions";
import {DateNow} from "../../apps/functions";
import newAuthor from "../NewAuthor/NewAuthor";
import CreatePostCSS from "./CreatePostCSS.module.scss"

function CreatePost() {

    const [author, setAuthor] = useState("");
    const [avatar, setAvatar] = useState("");
    const [nickname, setNickname] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [publishingDate, setPublishingDate] = useState(DateNow());
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState(0);
    const [reposts, setReposts] = useState(0);

    const dispatch = useDispatch();
    const onCreatePost = (event) => {
        event.preventDefault();
        if (author && content) {
        dispatch(addPost({author, avatar, nickname, image, content, publishingDate, likes, comments, reposts}));
        setAuthor("");
        setAvatar("");
        setNickname("");
        setImage("");
        setContent("");
        setPublishingDate(DateNow());
        setLikes(0);
        setComments(0);
        setReposts(0);
        } else {
            alert("Please, fill fields 'Author' and 'Content'")
        }
    }

    return (
        <div className={CreatePostCSS.wrapper}>
            <div onSubmit={onCreatePost}>
                <form onSubmit={onCreatePost}>
                    <div className={CreatePostCSS.wrapper__author}>
                        <select
                            value={author}
                            onChange={(event) => {
                                setAuthor(event.target.value)
                            }}>
                            <option className={CreatePostCSS.wrapper__author_option}
                                    value={author}>
                                Select an author *
                            </option>
                            {newAuthor.map((author, ind) => (
                                <option
                                    key={ind}
                                    value={author.name}>
                                    {author.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={CreatePostCSS.wrapper__link}>
                        <input
                            type="text"
                            placeholder="Please, insert the link to image"
                            onChange={(event) => setImage(event.target.value)}/>
                    </div>
                    <div className={CreatePostCSS.wrapper__content}>
            <textarea
                placeholder="Content *"
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
                    </div>
                    <div className={CreatePostCSS.wrapper__button}>
                        <button
                            type="submit"
                            onClick={onCreatePost}>
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;