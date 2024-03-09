import React from "react";
import './BlogAlone.css';

const BlogStandAlone = props => {
    let blog = props.blog;
    
    // let res= blog.content.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    let contentArray = blog.content.split("<br>");
    return (
        <div className=" bg-[#0E0E0E] text-[#F7CA17]">
        <div className="p-4 pt-[80px] sm:w-full lg:w-[60%] mx-auto bg-[#0E0E0E] text-[#F7CA17]">
            <div className="text-3xl font-[800] text-bolder mx-auto flex justify-center items-center text-center">
                <h1>{blog.title}</h1>
            </div>
            <img className="for_image mx-auto my-6 rounded-md max-w-[700px] w-full min-w-[250px]" src={blog.imageurl1} alt="img"/>
            { contentArray.map((ele) => {
                return (<div><p className="for_content">{ele}</p><br/></div>)
            }) }
        </div>
        </div>
    )

}


export default BlogStandAlone;
