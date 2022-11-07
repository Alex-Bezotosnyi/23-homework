import React from "react";
import {Provider} from "react-redux";
import {store} from "../redux/store";
import PostsModule from "../modules/PostsModule/PostsModule";

function App() {
    return (
        <Provider store={store}>
            <div>
                <PostsModule/>
            </div>
        </Provider>
    )
}

export default App;
