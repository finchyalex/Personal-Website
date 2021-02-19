var POSTQueue = [];
var POSTComplete;


function Post(PostLocation, PostInformation, CallBack) {
    this.PostLocation = PostLocation;
    this.PostInformation = PostInformation;
    this.CallBack = CallBack;
}

function QueuePost(Post) {
    POSTQueue.push(Post);
}



function AttemptPost() {
    if ((POSTQueue.length >= 1) && (POSTComplete != false)) {
        PostAttempt = POSTQueue.shift();
        POSTComplete = false;
        $.post(PostAttempt.PostLocation, PostAttempt.PostInformation, function (response) {
            PostAttempt.CallBack(response);
            POSTComplete = true;
        });
    }

}

setInterval(AttemptPost, 50);
