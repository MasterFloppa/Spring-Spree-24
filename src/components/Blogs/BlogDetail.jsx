import React, { Fragment } from "react";
import { blogArray } from "./blogArray";
import { useParams } from 'react-router-dom';
import BlogStandAlone from "./BlogStandAlone";
import { useState } from "react";
import { useEffect } from "react";
import { Loader } from "../Loader";
const BlogDetail = () => {

    const params = useParams();
    const blogId = params.blogId;

    const [content, setContent] = useState(<Loader />);

    const whichBlog = () => {
        for (var i = 0; i < blogArray.length; ++i) {
            if (blogArray[i].id === blogId) {
                return (
                    <Fragment>
                        <BlogStandAlone blog={blogArray[i]} />
                    </Fragment>
                )
            }
        }
        return (
            <Fragment>
                <h1 align="center" style={{ color: "white" }}>404 No Such Blog</h1>
            </Fragment>
        )
    }

    useEffect(() => {
        let getContent = whichBlog();
        setContent(getContent);
    }, [])

    return (
        content
    )

}

export default BlogDetail;