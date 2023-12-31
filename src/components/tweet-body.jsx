import { TweetTitle } from "../components";

function TweetBody({texte, imgsrc}) {

    if (imgsrc){
        return (
            <div className="tweet-body">
                
                <TweetTitle />
                <p className="tweet-text"> {texte} </p>
                
                <div className="tweet-image">
                    <img src= {imgsrc} alt="" />
                </div>
                
                {/* 
                <TweetText />
                <TweetImage /> */}
            </div>
        )
    } else {
        return (
            <div className="tweet-body">
                
                <TweetTitle />
                <p className="tweet-text"> {texte} </p>
                
                {/* 
                <TweetText />
                <TweetImage /> */}
            </div>
        )
    }

    
}

export default TweetBody ;