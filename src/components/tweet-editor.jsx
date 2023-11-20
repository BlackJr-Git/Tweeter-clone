import { Avatar } from '../components';
import { TweetEditorForm } from '../components';

function TweetEditor() {
    return (
        <div className="tweet-editor"> 
            <Avatar />
            <TweetEditorForm />
        </div>
    )
}

export default TweetEditor;