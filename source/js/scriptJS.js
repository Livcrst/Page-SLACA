console.log('Hello teste Galoá');
function readMore() {
    let elip = document.getElementById('elipsis');
    let moreRead = document.getElementById("more");
    let abstract = document.getElementById("content-abstract");
    let butRead = document.getElementById("buttonRead");

    if(elip.style.display != "none"){
       
        moreRead.style.display = "inline";
        abstract.style.height = "500px";
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
    let sendTopic = document.getElementById("topic-send");
    // let sendButton = document.getElementById('send');

    // Criar a tela de enviado para o card 
    if (sendTopic.style.display =! "none"){
        sendTopic.style.display = "none";
    }
    else{
        sendTopic.style.display = "inline";

    }

};

