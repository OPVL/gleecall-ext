// <ul style="height: 6800px; width: 100%;">
// ^ Set the height based on how many results num * 50px

function init() {
    let searchRoot = document.getElementsByClassName('itemListScrolling');

    let searchIndex = document.createElement('ul');
    searchIndex.style.width = '100%';
    searchIndex.style.height = data.length * 50 + 'px';

    searchRoot[0].appendChild(searchIndex);

}

init();

function resultInList(id, result) {
//     <li class="active" tabindex="-1"
//     style="position: absolute; left: 0px; top: 0px; height: 50px; width: 100%;">
//     <div class="masked itemIcon-medium"><img
//             src="https://c.1password.com/richicons/images/login/60/my.1password.com.png" alt=""
//             aria-hidden="true"></div>
//     <div class="details"><span>Bullhorn Account (Samuel Culpepper)</span>
//         <p class="secondary">lloydculpepper4@gmail.com</p>
//     </div><button tabindex="-1">Go</button>
// </li>

    result =  {
        "entityId": 24630,
        "entityType": "ClientContact",
        "title": "NRCAND TEST",
        "byLine": "TEST CLIENT LTD",
        "location": "test"
    };

    /**
     * List Item
     */
    let listItem = document.createElement('li');
    listItem.style.position = 'absolute';
    listItem.style.top = id * 50 + 'px';
    listItem.style.width = '100%';

    /**
     * Icon Div
     */
    let img = document.createElement('img');
    let imgDiv = createDiv(['masked', 'itemIcon-medium']);
    img.src = "https://c.1password.com/richicons/images/login/60/my.1password.com.png";
    imgDiv.appendChild(img); // First Item to be appended

    /**
     * Detail Div
     */
    let detailDiv = createDiv(['details']);
    let detailSpan = document.createElement('span');
    let detailText = document.createElement('p');

    detailSpan.innerText = result.byLine;
    detailText.innerText = result.entityType;

    detailDiv.appendChild(detailSpan);
    detailDiv.appendChild(detailText);

    let buttonDiv = createDiv([]);
    let button = document.createElement('button');
    button.tabIndex = '-1';
}

/**
 * Create an element with multiple classes
 * @param array classes eg. ['flex', 'text-center']
 */
function createDiv(classes = []){
    let div = document.createElement('div');

    classes.forEach(className => {
        div.classList.add(className);
    });

    return div;
}