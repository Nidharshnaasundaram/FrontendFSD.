function AddTask() {
    var input = document.querySelector('.input');
    if (input.value.trim() === "") {
        alert("Task name cannot be empty!");
        return;
    }

    console.log(input.value);
    var element = document.getElementById('TaskContainer');
    console.log(element);
    
    var newElement = document.createElement('div');
    newElement.classList.add('ind-task');
    newElement.innerHTML = `<p>${input.value}</p><button onclick="DeleteTask(event)">Delete</button>`;
    
    element.append(newElement);
    
    input.value = "";  // Clear the input field after adding the task
}

function DeleteTask(event) {
    event.target.parentElement.remove();
}
