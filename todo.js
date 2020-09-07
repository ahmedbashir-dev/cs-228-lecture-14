let addTaskBtn = document.getElementById("addTaskBtn");
let taskInput = document.getElementsByTagName("input")[0];
let tasksDiv = document.getElementById("taskslist");

addTaskBtn.addEventListener('click',function(){
    // let li = document.createElement("li"); //<li></li>
    // li.innerHTML = taskInput.value;
    let p = document.createElement("p");
    let div2 = document.createElement("div");
    let div1 = document.createElement("div"); //<div class = "card">
    div1.classList.add("card");
    div2.classList.add("card-header");
    p.innerHTML = taskInput.value;
    div2.appendChild(p); //<div class = "card-header"> <p> kdsvkjsdbv </p> </div>
    div1.appendChild(div2);
    tasksDiv.appendChild(div1);
});