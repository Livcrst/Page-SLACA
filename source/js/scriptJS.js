console.log('Hello teste Galoá');
function readMore() {
    let elip = document.getElementById('elipsis');
    let moreRead = document.getElementById("more");
    let abstract = document.getElementById("content-abstract");
    let butRead = document.getElementById("buttonRead");

    if(elip.style.display != "none"){
       
        moreRead.style.display = "inline";
        abstract.style.height = "500px";
        buttonRead.style.display = "none";
    }

}