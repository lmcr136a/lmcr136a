var inputText = document.getElementById('inputText');
inputText.focus();
var totalItems = 0;

function updateItemStatus() {
    var chId = this.id.replace('cb_', '');
    var itemText = document.getElementById('item_' + chId);

    if (this.checked) {
        itemText.className = 'checked';
    } else {
        itemText.className = '';
    }
}

function renameItem() {
    var newText = prompt("what should this item be renamed to?");
    if (!newText || newText === "" || newText === " ") { return false; }

    var spanId = this.id.replace('pencilIcon_', '');
    var span = document.getElementById('item_' + spanId);

    span.innerText = newText;
}
function deleteItem() {
    var listItemId = this.id.replace('minusIcon_', 'li_');
    document.getElementById(listItemId).style.display = "none";
}
var donelist = document.getElementById('donelist');
function moveItem() {
    var listItemId = this.id.replace('li_' , '');
    var listItem = document.getElementById('li_' + listItemId);
    var listItemParentId = listItem.parentElement;
    //console.log(listItemParentId);
    if (listItemParentId == donelist) {
        todolist.appendChild(listItem);
    } else {
        donelist.appendChild(listItem);
    }
}

function mouseover() {
    var IconId = this.id.replace('li_', '');
    var pencilIcon = document.getElementById('pencilIcon_' + IconId);
    pencilIcon.style.visibility = 'visible';
    var minusIcon = document.getElementById('minusIcon_' + IconId);
    minusIcon.style.visibility = 'visible';
}
function mouseout() {
    var IconId = this.id.replace('li_', '');
    var pencilIcon = document.getElementById('pencilIcon_' + IconId);
    pencilIcon.style.visibility = 'hidden';
    var minusIcon = document.getElementById('minusIcon_' + IconId);
    minusIcon.style.visibility = 'hidden';
}


function addNewItem(list, itemText) {
    var date = new Date();
    var id = " " + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

    var listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = moveItem;
    listItem.addEventListener('mouseover', mouseover);
    listItem.addEventListener('mouseout', mouseout);

    var span = document.createElement('span');
    span.id = 'item_' + id;
    span.innerText = itemText;
    //span.onclick = renameItem;

    var pencilIcon = document.createElement('i');
    pencilIcon.className = 'fa fa-edit';
    pencilIcon.id = 'pencilIcon_' + id;
    pencilIcon.onclick = renameItem;
    //var checkbox = document.createelement('input');
    //checkbox.type = 'checkbox';
    //checkbox.id = 'cb_' + id;
    //checkbox.onclick = updateitemstatus;

    var minusIcon = document.createElement('i');
    minusIcon.className = 'fa fa-minus';
    minusIcon.id = 'minusIcon_' + id;
    minusIcon.onclick = deleteItem;

    //listItem.appendChild(checkBox);
    listItem.appendChild(span);
    listItem.appendChild(pencilIcon);

    listItem.appendChild(minusIcon);
    list.appendChild(listItem);
} //���ο� list�� �߰��ϰ� check, remove, rename ����



inputText.onkeyup = function (event) {
    if (event.which === 13) {
        var itemText = inputText.value;
        if (itemText === "" || itemText === " ") return false;
        addNewItem(document.getElementById('todolist'), itemText);
        inputText.focus();
        inputText.select();
    }
}; //����������






// JavaScript source code
