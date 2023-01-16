document.querySelector("form").addEventListener("submit", addTodo);
document.addEventListener("DOMContentLoaded", getTodoList);
document.querySelectorAll("li button").forEach(function(el){
    el.addEventListener("click", deleteTodo);
});
let todoList = [];


function addTodo(event) {
    event.preventDefault();
    let todo = document.querySelector("input").value;
    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    displayTodoList();
}

function deleteTodo(event) {
    let item = event.target.parentNode;
    let index = todoList.indexOf(item.innerHTML);
    todoList.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    item.remove();
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
        let btn = document.createElement("button");
        btn.innerHTML = "Suppr";
        btn.addEventListener("click", deleteTodo);
        item.innerHTML = todoList[i];
        item.appendChild(btn);
        list.appendChild(item);
    }
}