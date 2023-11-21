import { TweetAction } from "../components"

function TweetActions() {
    return (
        <div className="tweet-actions">
            <TweetAction imgsrc={"src\\images\\Icons\\Reply.png"} actionCount={20} />
            <TweetAction imgsrc={"src\\images\\Icons\\Retweet.png"} actionCount={457} />
            <TweetAction imgsrc={"src\\images\\Icons\\React.png"} actionCount={45} />
            <TweetAction imgsrc={"src\\images\\Icons\\Share.png"} actionCount={null} />
        </div>
    )
}

export default TweetActions;