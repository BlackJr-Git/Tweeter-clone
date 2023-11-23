
import {TweetActions,TweetBody } from "../components"

function TweetContent() {
    return (
        <div className="tweet-content">
            <TweetBody imgsrc={"src\\images\\tweet-image.png"} texte={"Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land."} />
            <TweetActions />
            
        </div>
    )
}

export default TweetContent;