let div = document.createElement('div');
// sendMessage();
const interval = setInterval(()=>{
    console.log("weee");
    sendMessage(); 
}, 3000);

const sendMessage = () =>{
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    });
};
const setCount = (res) => {
    div.textContent = `${res.time}`
    document.body.appendChild(div)
};