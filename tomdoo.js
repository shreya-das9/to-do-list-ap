function addtask(){
    const taskInput=document.getElementById('taskInput');
    const tasktext=taskInput.value.trim();
    if(tasktext===''){
        alert('Please enter a task!!');
    }
    else{
        const taskList=document.getElementById('taskList');
        const taskItem = document.createElement('li');
taskItem.innerHTML = `${tasktext} <button onclick="deletetask(this)" style="margin-left: 10px background-color:beige;">Delete</button>`;
taskItem.style.listStyleType = 'none';
taskList.appendChild(taskItem);
        //alert('task added successfully');
        taskInput.value='';

    }

}

function deletetask(taskItem){
    const taskList=document.getElementById('taskList');
    taskList.removeChild(taskItem.parentNode);
   // alert('task deleted successfully');
    taskList.removeChild(taskItem.parentNode);
}