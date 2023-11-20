import { TweetImage, TweetText, TweetTitle } from "../components";

function TweetBody() {
    return (
        <div className="tweet-body">
            <TweetTitle />
            <TweetText />
            <TweetImage />
        </div>
    )
}

export default TweetBody ;