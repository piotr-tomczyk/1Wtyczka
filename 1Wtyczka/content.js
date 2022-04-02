
let substring = "https://www.youtube.com/watch";
let refreshtime = 3000;
const interval = setInterval(() =>{
    if(window.location.toString().includes(substring)){
        let time = document.querySelector('.ytp-time-current');
        refreshtime = 10000000000000;
        chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        sendResponse({time: time.textContent})
        return true;
    })
}
},refreshtime);
