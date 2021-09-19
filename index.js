let  addTask = document.getElementById('addtask')
let addIcon = document.getElementById('add_icon')
let tasks = document.getElementById('tasks')

addIcon.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('task-item');
    paragraph.innerText = addTask.value;
    tasks.appendChild(paragraph);
    addTask.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        tasks.removeChild(paragraph);
    })
})