import {getDate, getRandomNumber} from "./functions";
import Bart from "../assets/avatar/bart.png";
import Homer from "../assets/avatar/homer.png";
import Lisa from "../assets/avatar/lisa.png";
import Post1 from "../assets/image/homer.jpg";
import Post2 from "../assets/image/bart.jpg";
import Post3 from "../assets/image/lisa.png";

const PostsData = [
    {
        author: "Homer Simpson",
        avatar: Homer,
        nickname: "@homer",
        publishingDate: getDate("11/10/2022", "01/01/2020"),
        content: "Operator! Give me the number for 911!",
        image: Post1,
        likes: getRandomNumber(),
        comments: getRandomNumber(),
        reposts: getRandomNumber(),
    },
    {
        author: "Bart Simpson",
        avatar: Bart,
        nickname: "@bart",
        publishingDate: getDate("11/10/2022", "01/01/2020"),
        content: "I can’t promise I’ll try, but I’ll try to try.",
        image: Post2,
        likes: getRandomNumber(),
        comments: getRandomNumber(),
        reposts: getRandomNumber(),
    },
    {
        author: "Lisa Simpson",
        avatar: Lisa,
        nickname: "@lisa",
        publishingDate: getDate("11/10/2022", "01/01/2020"),
        content: "Pablo Neruda Said, 'Laughter Is The Language Of The Soul.",
        image: Post3,
        likes: getRandomNumber(),
        comments: getRandomNumber(),
        reposts: getRandomNumber(),
    },
]

export default PostsData;