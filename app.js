document.querySelector('form').addEventListener('submit', handelSubmitForm);
document.querySelector('ul').addEventListener('click', handlerclick)

function handelSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function handlerclick(e) {
    if(e.target.name == 'checkBtn')
        checkTodo(e);

    if (e.target.name == 'deleteBtn')    
        deleteTodo(e);
}

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    
    li.innerHTML = `
        <input type="checkbox" class="BtnJs name="checkBtn">
        <div class="todo-item">${todo}</div>
        <button class="BtnJs" name="deleteBtn"><i class="fas fa-trash"></i></button>
    `;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    
        else 
            item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.remove();
}

const ToDoListApiUrl = "http://localhost:3000/";
const information = { description: "Koop melk"};
 fetch(ToDoListApiUrl, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(information),
})
    .then(response => response.json())
        .then(information => {
            console.log('Success:', information);
    })
    .catch((error) => {
        console.error('Error:', error);
});

async function postTodoData(input) {
    const data = {description: input, done: true};
    await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
      },
    });
    return updateData();
}
async function deleteTodoData(id) {
    const deleteUrl = apiUrl + "" + id;
    await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      }, 
    });
    return updateData();
}