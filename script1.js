const btnAddTaskList = document.getElementById('task-list-add-btn');
const modal = document.getElementById('modal-bg');
const container = document.getElementById('container');
const tasklists = document.getElementsByClassName('task-list');

btnAddTaskList.addEventListener('click', () => {
  modal.classList.add('bg-active');
  container.classList.add('blur');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bg-active')) {
    modal.classList.remove('bg-active');
    container.classList.remove('blur');
  }
});

for (let e of tasklists) {
  e.addEventListener('click', () => {
    location.replace('./single-task.html');
  });
}

console.log(tasklists);
