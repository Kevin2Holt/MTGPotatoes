//Function to get the date the document was last updated
function lastUpdated() {

    //Get the date last modified
    var myDate = document.lastModified;

    //Set the code id in the HTML to the date last modified
    document.getElementById("lastUpdated").innerHTML = myDate;

}

//Execute when page is loaded
window.onload = lastUpdated;