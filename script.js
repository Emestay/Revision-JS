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

let allP = document.getElementsByTagName("p");
console.log(allP);
let firstP = document.getElementsByTagName("p")[0];
console.log(firstP);
firstP.innerText = "BOUUUUUUUUDUUUUUUUUUUU";




//! EXO 20.1 
//TODO: Créer une ƒ° ajouterTexte qui prend 2 params : pseudo et duTexte
//TODO: La fonction a pour but :
//TODO: de créer puis remplir et enfin placer un paragraphe contenant pseudo et duTexte, dans la page
// TODO (Bonus) : Dans le paragraphe le pseudo est affiché en gras


function ajouterTexte(pseudo, duTexte) {
    let p = document.createElement("p");
    let strong = document.createElement("strong");
    let boldPseudo = document.createTextNode(pseudo);
    strong.appendChild(boldPseudo);
    p.appendChild(strong);
    let text = document.createTextNode("  -  "+duTexte);
    p.appendChild(text);
    let parent = document.querySelector('.truxExo');
    parent.appendChild(p);
  }




ajouterTexte('José','Gracia');
ajouterTexte('Grigny','La grande Borne');
ajouterTexte('Roi','Heenok');
ajouterTexte('Dongue','Rodrigue');
ajouterTexte('Youssef','Est d\'une intelligence encore inégalé');


//! <p> <Strong> </p>