chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ colour: '#3aa747' }, function() {
        console.log('the colour is green');
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'developer.chrome.com' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.commands.onCommand.addListener(function(command) {
    console.log('onCommand event received for message: ', command);
});