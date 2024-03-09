import React, { useRef } from "react";
import BlogListItem from "./BlogListItem";
import { blogArray } from "./blogArray";

const Blogs = props => {
    let blogs = blogArray

    let blogList;

    if (blogs.length) {
        blogList = blogs.map((blog) => <BlogListItem blog={blog} />)
    }
    else {
        blogList = <h2>Empty</h2>
    }

    const style = {
        margin: "auto",
        width: "60%",
        padding: "10px",
    }

    const BlogSection = useRef(null);
    const gotoBlogSection = () =>
        window.scrollTo({
        top: BlogSection.current.offsetTop,
        behavior: "smooth",
    });

    return (
            <div className="bg-[#0E0E0E] text-[#F7CA17]">
            <div className='bg-[#0E0E0E] text-[#F7CA17] pt-[100px] text-center flex'>
        <h1 className="text-4xl font-[800] text-bolder mx-auto flex justify-start items-center text-center">BLOGS</h1>
            </div>
            <div ref={BlogSection} className="sm:w-full lg:w-[60%] p-4 mx-auto">
                <br/><br/>
                {blogList}
            </div>
        </div>
    )

}
export default Blogs;