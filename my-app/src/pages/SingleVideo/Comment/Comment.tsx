import './Comment.css'

export type CommentTypes = {
    content: string;
    publishedTimeText: string;
    author: {
        avatar: [
            {
                width: number;
                url: string;
                height: string
            }
        ],
        title: string;
    } 
}

const Comment = ({author, content, publishedTimeText}: CommentTypes) => {
    const { avatar, title } = author;
    const lastProfileUrl = avatar[avatar.length - 1]
    const { url } = lastProfileUrl; 
    
    
    return(
        <div className="comment">
            <img src={url}/> 
            <div className='comment-content'>
                <div className='comment-author'>
                    <h2>{title}</h2>
                    <h2>{publishedTimeText}</h2>
                </div>
                <p>{content}</p>
            </div>
        </div>
    ) 
}
export default Comment;