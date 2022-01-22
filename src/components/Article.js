import React from "react"; 
import ArticleList from "./ArticleList";
import blog from "../data/blog"


function Article({ title, date="January 1, 1970", preview}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )

    
}
export default Article 