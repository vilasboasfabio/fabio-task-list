// class Task {
//     constructor(text, id,) {
//         this.text = text;
//         this.completed = false;
//         this.id = id;
//     }
// }

// class TaskList {
//     constructor() {
//         this.tasks = [];
//         this.editIndex = -1;
//     }

//     send() {
//         const taskInput = document.getElementById('typeTask');
//         const texto = taskInput.value.trim();

//         if (texto !== '') {
//             if (this.editIndex !== -1) {
//                 this.tasks[this.editIndex].text = texto;
//                 this.editIndex = -1;
//             } else {
//                 const newTask = new Task(texto, this.generateId());
//                 this.tasks.push(newTask);
//             }
//             this.updateTaskList();
//             taskInput.value = '';
//         }
//     }

//     updateTaskList() {
//         const caixaTarefas = document.getElementById('hidden');
//         caixaTarefas.innerHTML = '';

//         this.tasks.forEach((task, index) => {
//             const novaTarefa = document.createElement('div');
//             novaTarefa.classList.add('task-item');
//             novaTarefa.id = `task`;

//             const taskText = document.createElement('p');
//             taskText.textContent = task.text;

//             const completeButton = document.createElement('button');
//             completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
//             completeButton.classList.add('complete-button');
//             completeButton.addEventListener('click', () => this.completeTask(index));

//             const editButton = document.createElement('button');
//             editButton.textContent = 'Edit';
//             editButton.classList.add('edit-button');
//             editButton.addEventListener('click', () => this.editTask(index, task.text));

//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             deleteButton.classList.add('delete-button');
//             deleteButton.addEventListener('click', () => this.deleteTask(index));

//             novaTarefa.appendChild(taskText);
//             novaTarefa.appendChild(completeButton);
//             novaTarefa.appendChild(editButton);
//             novaTarefa.appendChild(deleteButton);

//             if (task.completed) {
//                 completeButton.style.backgroundColor = 'green';
//             }

//             caixaTarefas.appendChild(novaTarefa);
//         });
//     }

//     completeTask(index) {
//         this.tasks[index].completed = !this.tasks[index].completed;
//         this.updateTaskList();
//     }

//     editTask(index, text) {
//         const taskInput = document.getElementById('typeTask');
//         taskInput.value = text;
//         this.editIndex = index;
//     }

//     deleteTask(index) {
//         this.tasks.splice(index, 1);
//         this.updateTaskList();
//     }

//     generateId() {
//         return Math.floor(Math.random() * 1000);
//     }
// }

// const taskList = new TaskList();



