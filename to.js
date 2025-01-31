const todo=document.getElementById("task");
const show=document.getElementById("show-tasks");


function add(){
  if(todo.value==='' || todo.value>0 ){
    alert("Enter Valid Text");
  }else{
    let li = document.createElement("li");
    li.innerHTML = todo.value;
    show.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    
  }
  todo.value="";
  saveTask();
}

show.addEventListener("click", function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
  }else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveTask();
  }
}, false);

function saveTask(){
  localStorage.setItem("data", show.innerHTML);
}

function showTask(){
  show.innerHTML = localStorage.getItem("data");
}
showTask();