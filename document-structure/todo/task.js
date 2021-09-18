const tasksInput = document.querySelector(".tasks__input");
const tasksAdd = document.querySelector(".tasks__add");
const tasksListContainer = document.querySelector(".tasks__list");

const forKeyup = (e) => {
  if(e.keyCode == 13 && tasksInput.value !== "") {
    e.preventDefault();
    tasksListContainer.innerHTML += `
    <div class="task">
      <div class="task__title">
        ${tasksInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `;
  tasksInput.value = ""
  }
}

const forClick = (e) => {
  if(tasksInput.value !== "") {
    e.preventDefault();
    tasksListContainer.innerHTML += `
    <div class="task">
      <div class="task__title">
        ${tasksInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
    `;
  tasksInput.value = ""
  }

  Array.from(document.querySelectorAll(".task__remove")).forEach(elem => {
    elem.addEventListener("click", () => {
      elem.closest(".task").remove();
    })
  });
}

tasksInput.addEventListener("keyup", forKeyup)

tasksAdd.addEventListener("click", forClick)
