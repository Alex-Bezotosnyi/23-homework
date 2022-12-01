import React from "react";
import {Provider} from "react-redux";
import PostsModule from "./components/modules/PostsModule/PostsModule";
import {store} from "./store/store";

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
