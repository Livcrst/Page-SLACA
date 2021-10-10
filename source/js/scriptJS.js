console.log('Hello teste Galoá');
function readMore() {
    let elip = document.getElementById('elipsis');
    let moreRead = document.getElementById("more");
    let abstract = document.getElementById("content-abstract");
    let butRead = document.getElementById("buttonRead");

    if(elip.style.display != "none"){
       
        moreRead.style.display = "inline";
        abstract.style.height = "fit-content";
        butRead.style.display = "none";
    }

};

const AddTopic = ()=>{
    let newTopic = document.getElementById("new-topic");
    let shareTopic = document.getElementById("share");

    if (shareTopic.style.display != "none"){
        shareTopic.style.display = "none";
        newTopic.style.display = "inline";
    }


};

const SendTopic = () => {
    let sendTopic = document.getElementById("sent-sucess");
    let discussion = document.getElementById("discussion-topic");
    let topic = document.getElementById("new-topic");
    
    

    sendTopic.style.display = "block";
    discussion.style.display = "block";
    topic.style.display = "none";

};

const Replies = () => {
    let replyDiscussions = document.getElementById("reply-coment");
    let cardsReply = document.getElementById("replies");

    replyDiscussions.style.color = 'orange';
    replyDiscussions.style.textDecoration = "underline";

    cardsReply.style.display = "inline";
}

