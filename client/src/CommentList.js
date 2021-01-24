import React from 'react';

const CommentList = ({ comments }) => {
  
    const renderedComments = comments.map(comment => {
        let content;

        switch (comment.status) {
            case 'Approved':
                content = comment.content
                break;

            case 'Pending':
                content = 'This content is awaiting moderation';
                break;
            
            case 'Rejected':
                content = 'This comment has been rejected';
                break;
            default:
                break;
        }
        return <li key={comment.id}>{content}</li>;
    });

    return <ul>{renderedComments}</ul>;
    
};


export default CommentList;