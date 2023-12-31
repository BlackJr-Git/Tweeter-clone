import { TweetAvatar, TweetContent } from "../components";

function Tweet({
  tweetImage,
  tweetText,
  tweetAvatar,
  author,
  authorUserName,
  tweetTime,
  reply,
  retweet,
  react,
  handleClick
  
}) {
  return (
    <div className="tweet">
      <TweetAvatar imgsrc={tweetAvatar} />
      <TweetContent
        imgsrc={tweetImage}
        texte={tweetText}
        author={author}
        userName={authorUserName}
        time={tweetTime}
        reply={reply}
        retweet={retweet}
        react={react}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Tweet;
