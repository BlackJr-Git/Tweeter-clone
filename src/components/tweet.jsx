import { TweetAvatar, TweetContent } from "../components" ;

function Tweet() {
    return (
        <div className="tweet">
            <TweetAvatar />
            <TweetContent />
        </div>
    )
}

export default Tweet;