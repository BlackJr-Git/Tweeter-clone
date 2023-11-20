
import {TweetActions,TweetBody } from "../components"

function TweetContent() {
    return (
        <div className="tweet-content">
            <TweetBody />
            <TweetActions />
        </div>
    )
}

export default TweetContent;