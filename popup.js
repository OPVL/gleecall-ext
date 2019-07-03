let changeColour = document.getElementById('changeColour');

chrome.storage.sync.get('colour', function(data) {
    changeColour.style.backgroundColor = data.colour;
    changeColour.setAttribute('value', data.colour);
});

changeColour.onclick = function(element) {
    let colour = element.target.value;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, { code: 'document.body.style.backgroundColor = "' + colour + '";' });
    });
};