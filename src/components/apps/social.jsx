function buttonClickerLike(status, setStatus, dispatch) {
    if (status === "clickedLike") {
        setStatus(null)
        dispatch({
            type: "HANDLE_LIKE",
            payload: - 1,
        })
    } else {
        setStatus("clickedLike")
        if (status !== "clickedLike")
            dispatch({
                type: "HANDLE_LIKE",
                payload: 1,
            })
    }
}

function buttonClickerComment(status1, setStatus, dispatch) {
    if (status1 === "clickedLike") {
        setStatus(null)
        dispatch({
            type: "HANDLE_COMMENT",
            payload: - 1,
        })
    } else {
        setStatus("clickedLike")
        if (status1 !== "clickedLike")
            dispatch({
                type: "HANDLE_COMMENT",
                payload: 1,
            })
    }
}

function buttonClickerRepost(status, setStatus, dispatch) {
    if (status === "clickedLike") {
        setStatus(null)
        dispatch({
            type: "HANDLE_REPOST",
            payload: - 1,
        })
    } else {
        setStatus("clickedLike")
        if (status !== "clickedLike")
            dispatch({
                type: "HANDLE_REPOST",
                payload: 1,
            })
    }
}

export {
    buttonClickerLike,
    buttonClickerComment,
    buttonClickerRepost,
}