import React, {useState, useEffect} from "react";
import HeaderTitle from "./HeaderTitle";
import { useSelector} from "react-redux";
import 'react-quill/dist/quill.snow.css';
import BlogAllPosts from "./BlogAllPosts";
import ReactQuill, { Quill } from "react-quill";
import Spinner from "./Spinner";
import { useHistory } from "react-router-dom";

const modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
}

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
]

const BlogPage = ({header}) => {
    const [value, setValue] = useState('');

    const [saving, setSaving] = useState(false);
    const isLogged = useSelector((state) => state.loginStore.isLogged);

    const history = useHistory();

    const savePost = () => {
        setSaving(true);
        const el = document.createElement("div");
        el.innerHTML = value;

        const titleElements = Array.from(el.querySelectorAll("*:not(:empty)"));
        let titleName = null;
        let descriptionName = null;

        for (const element of titleElements) {
            if (element.innerText != "") {
                if (titleName == null) {
                    titleName = element.innerText;
                } else {
                    descriptionName = element.innerText;
                    break;
                }
            }
        };

            if (descriptionName.length > 200) {
                descriptionName = descriptionName.substring(0, 200) + "..."
            };



        const imageElements = Array.from(el.querySelectorAll("img"));
        const imagesData = imageElements.map(i => i.src);

        imageElements.forEach((i, index) => i.src = "placeholder"+index);

        const url = titleName.replace(/\s+/g, '-').toLowerCase();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: titleName, description: descriptionName, file: el.innerHTML, images: imagesData, url: url })
        };



        fetch('https://api.mpactionphoto.pl/post', requestOptions)
            .then(response => response.json())
            .then(data => {history.push("/posts/"+url)});
    };

    return (
        <div>
            <HeaderTitle header="MIGAWKI"/>

            {isLogged && (
                <>
            <button className="button-upload">Upload blog post</button>

            <ReactQuill
                className="react-quill"
                    theme="snow"
                    value={value}
                    onChange={setValue}
                modules={modules}
                formats={formats}/>
                <div className="button-upload-div">
                    <button
                        className="button-upload"
                    onClick={savePost}
                    >Save</button>
                </div>
            { saving && (<Spinner/>)}
            </>
                )}
        <BlogAllPosts/>
        </div>
    );
}

export default BlogPage;