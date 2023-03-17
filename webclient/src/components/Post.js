import './Post.css'
import React from 'react';

function Post(props){
    
    const {name,msg} = props
    
    return (
        <li>{name}<div>{msg}</div></li>
    );
}
export default Post;