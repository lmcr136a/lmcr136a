// JavaScript source code
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-todo");

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event) {
    //이부분에 console.dir(event.target); 해보면 콘솔 창에 정보가 쭉 뜬다.
    //거기서 이 요소의 부모 요소 이름이 무엇인지 찾아봄
    //찾아보니까 parentNode임...그래서.parentNode추가!!
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("i");
    delBtn.className = "fa fa-minus";
    delBtn.addEventListener("click", deleteToDo);
    const ediBtn = document.createElement("i");
    ediBtn.className = "fa fa-edit";
    const span = document.createElement("span");
    span.innerText = text;
    span.className = "todocontents";
    const newId = toDos.length + 1;

    li.appendChild(span);
    li.appendChild(ediBtn);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    li.id = newId;

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parseToDos = JSON.parse(loadedToDos);
        parseToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }

}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);

}
init();