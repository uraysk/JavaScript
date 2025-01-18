const japaneseList = document.querySelector('.japanese-list');
//create new element with <li></li>
const firstRow = document.createElement('li');
//the contents to add is 'あいうえお' as text
firstRow.textContent = 'あいうえお';
//specify the place where あいうえお　　will be inserted
//parentElement.insertBefore(newElement, referenceElement=>put it before what)
japaneseList.insertBefore(firstRow, japaneseList.firstChild);

const lastRow = document.createElement('li');
lastRow.textContent = 'たちつてと';
japaneseList.append(lastRow);

//if you want to insert sth between かきくけこ and さしすせそ must make variable of these two. 