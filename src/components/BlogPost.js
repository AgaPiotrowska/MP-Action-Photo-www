import React from "react";
import {Link} from "react-router-dom";

const BlogPost = ({name, description, imageUrl, url}) => {
    return (
            <Link to={"/posts/"+url}>
                <div className="blog-component">
                <img src={imageUrl} className="blog-image" alt="blog"/>
                <div
                    className="blog-title">
                    <h1>{name}a</h1>
                    <p>{description}</p>
                </div>
                </div>
            </Link>
    );
}

export default BlogPost;