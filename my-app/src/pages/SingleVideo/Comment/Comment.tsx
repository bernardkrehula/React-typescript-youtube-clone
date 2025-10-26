import './Comment.css'

type CommentTypes = {
    commentData: {
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
}

const Comment = ({commentData}: CommentTypes) => {
    const { author, content, publishedTimeText } = commentData;
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