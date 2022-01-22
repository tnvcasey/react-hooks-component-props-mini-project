import React from "react"; 
import blogData from "../data/blog";
import blog from "../data/blog"
import Article from "./Article";

function ArticleList(props){
   const postArray= props.blogPosts.map((post) => {
        return <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
         />
    })
    return(
    <main>
        {postArray}
    </main>
    )
}
export default ArticleList