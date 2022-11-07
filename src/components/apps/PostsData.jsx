import {getDate} from "./functions";

import Post1 from "../assets/image/homer.jpg";
import Post2 from "../assets/image/bart.jpg";
import Post3 from "../assets/image/lisa.png";

import Homer from "../assets/avatar/homer.png";
import Bart from "../assets/avatar/bart.png";
import Lisa from "../assets/avatar/lisa.png";

const PostsData = [
    {
        author: "Homer Simpson",
        avatar: Homer,
        nickname: "@homer",
        publishingDate: getDate(),
        content: "Operator! Give me the number for 911!",
        image: Post1,
        likes: Math.floor(Math.random() * 100) + 1,
        comments: Math.floor(Math.random() * 10) + 1,
        reposts: Math.floor(Math.random() * 30) + 1,
    },
    {
        author: "Bart Simpson",
        avatar: Bart,
        nickname: "@bart",
        publishingDate: getDate(),
        content: "I can’t promise I’ll try, but I’ll try to try.",
        image: Post2,
        likes: Math.floor(Math.random() * 100) + 1,
        comments: Math.floor(Math.random() * 10) + 1,
        reposts: Math.floor(Math.random() * 30) + 1,
    },
    {
        author: "Lisa Simpson",
        avatar: Lisa,
        nickname: "@lisa",
        publishingDate: getDate(),
        content: "Pablo Neruda Said, 'Laughter Is The Language Of The Soul.",
        image: Post3,
        likes: Math.floor(Math.random() * 100) + 1,
        comments: Math.floor(Math.random() * 10) + 1,
        reposts: Math.floor(Math.random() * 30) + 1,
    },
]

export default PostsData;