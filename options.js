let page = document.getElementById('buttonDiv');
const kButtonColours = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColours) {
    for (const item of kButtonColours) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;

        button.addEventListener('click', function() {
            chrome.storage.sync.set({ colour: item }, function() {
                console.log(`colour is ${item}`);
            })
        });
        page.appendChild(button);
    }
}

constructOptions(kButtonColours);