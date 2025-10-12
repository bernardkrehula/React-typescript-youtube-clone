import './Comment.css'

type CommentTypes = {
    commentData: {
        snippet: {
        topLevelComment: {
            snippet: {
                authorDisplayName: string;
                authorProfileImageUrl: string;
                textDisplay: string;
                publishedAt: string;
            }
          }
        }
    } 
}

const Comment = ({commentData}: CommentTypes) => {
    const { snippet: { topLevelComment: { snippet } } } =  commentData;

    const { authorDisplayName, authorProfileImageUrl, textDisplay, publishedAt} = snippet;

    console.log(snippet)
    return(
        <div className="comment">
            <img src={authorProfileImageUrl}/>
            <div className='comment-content'>
                <div className='comment-author'>
                    <h2>{authorDisplayName}</h2>
                    <h2>{publishedAt}</h2>
                </div>
                <p>{textDisplay}</p>
            </div>
        </div>
    )
}
export default Comment;