import React from "react";

import Post from "./Post";
import Title from "./Title";

function App() {
    return (
        <>
            <Title site={{
                title: "Blog do Max",
                subtitle: "Posts da semana:"
            }} />

            <hr />

            <Post
                title="Noticia 1"
                subtitle="texto da noticia 2"
                likes={10}
            />
            <Post
                title="Noticia 2"
                subtitle="texto da noticia 2"
                likes={80}
            />
        </>
    );
}

export default App;