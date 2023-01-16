document.querySelector("form").addEventListener("submit", addTodo);
document.addEventListener("DOMContentLoaded", getTodoList);
let todoList = [];


function addTodo(event) {
    event.preventDefault();
    let todo = document.querySelector("input").value;
    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    displayTodoList();
}

function deleteUnTodo(event){
    
}

function getTodoList() {
    if (localStorage.getItem("todoList")) {
        todoList = JSON.parse(localStorage.getItem("todoList"));
        displayTodoList();
    }
}


function displayTodoList() {
    let list = document.querySelector("#todo-list");
    list.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = todoList[i];
        list.appendChild(item);
    }
}