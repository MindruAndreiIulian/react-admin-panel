import React from 'react';

function PostItem(props){
    const {userId,title,body}=props;

    return(
        <div>
            <h3 className="card-header">Titlu: {title}</h3>
            <h4>User-ul cu id: {userId}</h4>
            <p> {body}</p>
        </div>
    );

}

export default PostItem;