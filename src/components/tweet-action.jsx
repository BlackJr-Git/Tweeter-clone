
function TweetAction({imgsrc, actionCount, incrementAction}) {
    return (
        <div className="tweet-action" onClick={incrementAction}>
            <img src={imgsrc}  alt="" /> 
            <p >{actionCount}</p>
        </div>
    )
}

export default TweetAction;

