import React, { useState } from "react";

import Post from "./Post";
import Title from "./Title";

function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: "Titulo 01", subtitle: "Sub 01", likes: 10 },
        { id: Math.random(), title: "Titulo 02", subtitle: "Sub 02", likes: 20 },
        { id: Math.random(), title: "Titulo 03", subtitle: "Sub 03", likes: 30 }
    ]);

    console.log({ posts });

    function handleRefresh() {
        // setPosts([...posts, {
        //     id: Math.random(),
        //     title: `Titulo 0${posts.length + 1}`,
        //     subtitle: `Sub 0${posts.length + 1}`,
        //     likes: 10 + posts.length
        // }])

        setTimeout(() => {
            setPosts((prevState) => [
                ...prevState,
                {
                    id: Math.random(),
                    title: `Titulo 0${posts.length + 1}`,
                    subtitle: `Sub 0${posts.length + 1}`,
                    likes: 10 + posts.length
                }])
        }, 2000)
    }

    return (
        <>
            <Title site={{
                title: "Blog do Max",
                subtitle: "Posts da semana:"
            }} />

            <button onClick={handleRefresh}>Atualizar</button>
            <hr />

            {posts.map(post => (
                <Post
                    key={post.id}
                    title={post.title}
                    subtitle={post.subtitle}
                    likes={post.likes}
                />
            ))}
        </>
    );
}

export default App;