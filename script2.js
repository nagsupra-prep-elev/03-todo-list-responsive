const btnAddTask = document.getElementById('task-add-btn');

const modal = document.getElementById('modal-bg');
const container = document.getElementById('container-2');

btnAddTask.addEventListener('click', () => {
  modal.classList.add('bg-active');
  container.classList.add('blur');
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('bg-active')) {
    modal.classList.remove('bg-active');
    container.classList.remove('blur');
  }
});
