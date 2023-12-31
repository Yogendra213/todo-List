//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption =document.querySelector('.filter-todo');

//event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


//functions
function addTodo(event)
{//prevents form  from submitting
    event.preventDefault();
    //todo div
    const todoDiv= document.createElement('div');
    todoDiv.classList.add("todo");
    //todo li
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //completed or check mark button
    const completedButton =document.createElement('button');
    completedButton.innerHTML='<i class=" fas fa-check"> </i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    
    //trash mark button
    const trashButton =document.createElement('button');
    trashButton.innerHTML='<i class=" fas fa-trash"> </i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value="";
}
function deleteCheck(e)
{
    const item=e.target;
    //console.log("event=",e)
    //delete todo
    if(item.classList[0]==="trash-btn")
    {
        const todo=item.parentElement;
        //animation
        todo.classList.add("fall")
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }
    //check mark
    if(item.classList[0]==="complete-btn")
    {
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}
function filterTodo(e)
{
  const todos=todoList.childNodes;
console.log(e.target.value);
  todos.forEach((todo)=>
  {
      switch(e.target.value)
      {
        case "all":
            if(todo.trim)
            todo.style.display="flex";
            break;
        case "completed":
            console.log(todo)
            console.log("??=",todo.classList.contains("completed"));
            if(todo.classList.contains("completed"))
            {
                todo.style.display="flex";
                console.log("completed=",todo)
            }
            else
            {
                todo.style.display="none";
                console.log("uncompleted=",todo)
            }
        case "uncompleted":
            if(!todo.classList.contains('completed'))
            {
                todo.style.display="flex";
            }
            else
            {
                todo.style.display="none";
            }
      }
  });
}