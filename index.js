//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");

//ecouteurs
//addTodo et deletecheck sont des noms de la fonction
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("input",filterTodo);


//fonctions
function addTodo(event) {
    event.preventDefault();
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo")
    //creer le li
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-items")
    todoDiv.appendChild(newTodo)
    //button check
    const completebutton = document.createElement("button")
    completebutton.innerHTML = '<i class="fas fa-check"><i>';
    completebutton.classList.add("complete-btn");
    todoDiv.appendChild(completebutton);
    //button supprimer
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"><i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //ajouter notre todo a todo-list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] ==="trash-btn") {
       const todo=item.parentElement;
       todo.classList.add("fall")
       //todo.remove()
        //ou item.parentElement.remove();
        todo.addEventListener("transitionend",function(){
            todo.remove()
               
        })
    }
    
     //check mark
    if (item.classList[0] ==="complete-btn") {
        const todo=item.parentElement;
        todo.classList.toggle("completed");

    }
}

function filterTodo (e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
             todo.style.display="flex";
             break;
            case "completed":
              if(todo.classList.contains("completed")){
                todo.style.display="flex";
              } else{
                todo.style.display= "none";
              }
              break;
              case "uncompleted":
              if(!todo.classList.contains("completed")){
                todo.style.display="flex";
              } else{
                todo.style.display= "none";
              }
              break;
          
              

        }
    })
    
}
function saveLocalTodos (params) {
    
}