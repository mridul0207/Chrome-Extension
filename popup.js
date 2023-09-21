document.addEventListener("DOMContentLoaded",()=>{
    var myButton = document.getElementById('my-button');
    var tabTitle = document.getElementById('tab-title');

    myButton.addEventListener('click',()=>{
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            console.log(tabs[0].title);
            tabTitle.innerHTML = tabs[0].title;
        });
    })
})