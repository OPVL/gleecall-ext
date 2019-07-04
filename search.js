/* eslint-disable require-jsdoc */
// <ul style="height: 6800px; width: 100%;">
// ^ Set the height based on how many results num * 50px

function init() {
  const searchRoot = document.getElementsByClassName('itemListScrolling');

  const searchIndex = document.createElement('ul');
  searchIndex.style.width = '100%';
  searchIndex.style.height = data.length * 50 + 'px';

  const searchCounter = document.getElementById('clearSearch');
  searchCounter.innerText = `${data.length} Search Results`;

  searchRoot[0].appendChild(searchIndex);
  let count = 0;
  data.forEach((result) => {
    const entry = resultInList(count, result);
    searchIndex.appendChild(entry);
    count++;
  });
}

function resultInList(id, result) {
  /**
     * List Item
     */
  const listItem = document.createElement('li');
  listItem.style.position = 'absolute';
  listItem.style.top = id * 50 + 'px';
  listItem.style.width = '100%';

  /**
     * Icon Div
     */
  const img = document.createElement('img');
  const imgDiv = createDiv(['masked', 'itemIcon-medium']);
  img.src = 'https://c.1password.com/richicons/images/login/60/my.1password.com.png';
  imgDiv.appendChild(img); // First Item to be appended

  /**
     * Detail Div
     */
  const detailDiv = createDiv(['details']);
  const detailSpan = document.createElement('span');
  const detailText = document.createElement('p');

  detailSpan.innerText = result.title;
  detailText.innerText = result.entityType;

  detailDiv.appendChild(detailSpan);
  detailDiv.appendChild(detailText);

  const buttonDiv = createDiv([]);
  const button = document.createElement('button');
  button.tabIndex = '-1';
  button.innerText = 'Go';
  button.addEventListener('click', function() {
    updateDetailPanel(result);
  });

  buttonDiv.appendChild(button);

  /**
   * Append all to ListItem
   */
  listItem.appendChild(imgDiv);
  listItem.appendChild(detailDiv);
  listItem.appendChild(buttonDiv);

  return listItem;
}

function createDiv(classes = []) {
  const div = document.createElement('div');

  classes.forEach((className) => {
    div.classList.add(className);
  });

  return div;
}

function updateDetailPanel(result) {
  const detailsPanel = document.getElementById('itemDetails');
  console.log(`updating panel to show entity: ${result.title} - ${result.entityId}`);
}

init();
