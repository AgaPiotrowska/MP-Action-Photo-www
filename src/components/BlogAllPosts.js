import React, {useEffect, useState} from "react";
import BlogPost from "./BlogPost";

const BlogAllPosts = () => {

    const [post, setPost] = useState([]);


    const initialize = () => {
        fetch('https://api.mpactionphoto.pl/post/')
            .then(response => response.json())
            .then(data => {setPost(data.map((d) => {
                return d;
            }))});
    };

    useEffect( () => {
        initialize();
    }, []);

    return (
        <div>
            {post.map((p) => (
                <BlogPost
                    name={p.name}
                    description={p.description}
                    imageUrl={"/"+p.image}
                    url={p.url}
                />
            ))}
        </div>
    );
}

export default BlogAllPosts;