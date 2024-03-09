import React from "react";
import { Link } from "react-router-dom";
import './Blog.css';

const BlogListItem = props => {
    const currentURL = window.location.href
    let redirect = currentURL + "/" + props.blog.id;
    return (
        <div className="mt-1 mb-4 flex flex-col items-center">
            <img className="rounded-md max-w-[700px] w-full min-w-[250px]" src={props.blog.imageurl1} alt="img"/>
            <br />
            <h1 className="for_title text-center mb-4 font-[700]">{props.blog.title}</h1>
            <h3 className="for_description font-[400]">{props.blog.describe}</h3>
            {/* <Link to={`/blogs/${props.blog.id}`}> */}
            <div className="flex items-center justify-center mt-4">
            <a href={redirect} class="relative inline-flex items-center justify-center p-3 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Read More</span>
            <span class="relative invisible">Read More</span>
            </a>
            </div>
            {/* </Link> */}
            <br/>
        </div>
    )
}


export default BlogListItem;