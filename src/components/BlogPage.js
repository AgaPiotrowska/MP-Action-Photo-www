import React from "react";
import HeaderTitle from "./HeaderTitle";
import { useSelector} from "react-redux";

const BlogPage = ({header}) => {

    const isLogged = useSelector((state) => state.loginStore.isLogged);

    return (
        <div>

            {isLogged && (
                <button className="button-upload">Upload blog post</button>
            )}

            <HeaderTitle header="MIGAWKI"/>
        </div>
    )
};

export default BlogPage;