import React, {useEffect, useState} from "react";
import BlogPost from "./BlogPost";

const BlogAllPosts = () => {

    const [post, setPost] = useState([]);

    const initialize = () => {
        fetch('https://o7byko6zw0.execute-api.eu-central-1.amazonaws.com/prod/post/')
            .then(response => response.json())
            .then(data => {setPost(data.map((d) => {
                // d.src = "https://forest-spa.online/"+d.name;
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
                    imageUrl={"https://forest-spa.online/"+p.image}
                    url={p.url}
                />
            ))}
        </div>
    );
}

export default BlogAllPosts;