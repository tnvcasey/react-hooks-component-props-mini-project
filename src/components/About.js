import React from "react"; 


function About({aboutText, blogImage="https://via.placeholder.com/215"}){
   return(
   <aside>
        <img src={blogImage} alt="blog logo"/>
        <p>{aboutText}</p>
    </aside>
   )
}
export default About
