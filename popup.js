chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    const url = new URL(tabs[0].url);
    var urlParts = url.hostname.split(".");
    if(urlParts[1]!="com"){
        var siteName = urlParts[1].charAt(0).toUpperCase() + urlParts[1].slice(1);
    }
    else{
        var siteName = urlParts[0].charAt(0).toUpperCase() + urlParts[0].slice(1);
    }
    document.getElementById("headingOne").innerHTML = `<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
    aria-expanded="true" aria-controls="collapseOne">`+siteName+`</button>`
});
