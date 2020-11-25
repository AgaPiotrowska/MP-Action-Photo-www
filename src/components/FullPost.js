import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const FullPost = ({}) => {

  let {name} = useParams();

  const [html, setHtml] = useState("");

  const initialize = () => {
    fetch('/'+name)
        .then(data => data.text())
        .then(data => {
          setHtml(data);
        });
  };

  useEffect( () => {
    initialize();
  }, []);

  return (
      <div className="full-post" dangerouslySetInnerHTML={{ __html: html }} />
  )
};

export default FullPost;