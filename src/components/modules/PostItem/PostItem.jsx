import React, {useReducer, useState} from "react";
import {buttonClickerComment, buttonClickerLike, buttonClickerRepost} from "../../apps/social";
import {reducer} from "../../../store/reducer";
import CommentImage from "../../assets/icons/comment.png"
import LikeImage from "../../assets/icons/like.png"
import RepostImage from "../../assets/icons/repost.png"
import PostItemCSS from "./PostItem.module.scss";

function PostItem(props) {
    const {
        author,
        avatar,
        nickname,
        publishingDate,
        content,
        image,
        likes,
        comments,
        reposts
    } = props;

    const initialStateSocial = {
        clickedLike: likes,
        clickedComment: comments,
        clickedRepost: reposts,
    }

    const [state, dispatch] = useReducer(reducer, initialStateSocial);
    const {clickedLike, clickedComment, clickedRepost} = state;
    const [statusLike, setStatusLike] = useState(null);
    const [statusComment, setStatusComment] = useState(null);
    const [statusRepost, setStatusRepost] = useState(null);


    const handleClickLike = () => {
        buttonClickerLike (statusLike, setStatusLike, dispatch)
    }

    const onHandleComment = () => {
        buttonClickerComment (statusComment, setStatusComment, dispatch)
    }

    const onHandleRepost = () => {
        buttonClickerRepost (statusRepost, setStatusRepost, dispatch)
    }

    return (
        <div className={PostItemCSS.wrapper}>
            <div className={PostItemCSS.container__top}>
                <div className={PostItemCSS.container__top__name}>
                    <div className={PostItemCSS.container__top__name_avatar}><img src={avatar}/></div>
                    <div className={PostItemCSS.container__top__name__wholename}>
                        <div className={PostItemCSS.container__top__name__wholename_author}>{author}</div>
                        <div className={PostItemCSS.container__top__name__wholename_nickname}>{nickname}</div>
                    </div>
                </div>
                <div className={PostItemCSS.container__top__upperpart}>
                    <div className={PostItemCSS.container__top__upperpart_publishingDate}>{publishingDate}</div>
                </div>
            </div>
            <div className={PostItemCSS.wrapper_image}><img src={image}/></div>
            <div className={PostItemCSS.wrapper_content}>- {content}</div>
            <div className={PostItemCSS.container__bottom}>
                <div className={PostItemCSS.container__bottom_social}>
                    <div>
                        <button onClick={handleClickLike}><img src={LikeImage}/></button>
                    </div>
                    <div className={statusLike !== null ? PostItemCSS.container__bottom_social_increment : PostItemCSS.container__bottom_social}>
                        {clickedLike}
                    </div>
                </div>
                <div className={PostItemCSS.container__bottom_social}>
                    <div>
                        <button onClick={onHandleComment}><img src={CommentImage}/></button>
                    </div>
                    <div className={statusComment !== null ? PostItemCSS.container__bottom_social_increment : PostItemCSS.container__bottom_social}>
                        {clickedComment}
                    </div>
                </div>
                <div className={PostItemCSS.container__bottom_social}>
                    <div>
                        <button onClick={onHandleRepost}><img src={RepostImage}/></button>
                    </div>
                    <div className={statusRepost !== null ? PostItemCSS.container__bottom_social_increment : PostItemCSS.container__bottom_social}>
                        {clickedRepost}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem;