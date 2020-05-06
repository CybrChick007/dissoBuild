const clear = document.querySelector("clear");
const list = document. getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let LIST = [];
let id = 0;

//add task to task list
function addTask(task, id, done, bin){
  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";

  if(bin){return;}

  const text = `<li class = "item">
                <i class="fa ${DONE} " job="complete" id="${id}"></i>
                <p class="text ${LINE}">${task}</p>
                <i class="de fa fa-bin-o" job="delete" id="${id}"></i>
               </li>`;

list.insertAdjacentHTML("beforend", text);
}

//remove task from task list
function completeTask(element){
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector("text").classList.toggle(LINE_THROUGH);
  LIST[element.id].done = LIST[element.id].done ? false : true;

}

function binTask(element){
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].bin = true;
}


//Event Listeners
document.addEventListener("keyup", function(event){
  if(event.keycode == 13){
    const task = input.value;
    if(task){
      addTask(task, id, false, false);
        LIST.push(
          {
            name: task,
            id: id,
            done: false,
            bin:false
          }
        );
      input.value ="";
      id++;
    }
  }
});

list.addEventListener("click", function(event){
  let element = event.target;
  const elementJob = event.target.attributes.job.value;
  if(elementJob == "complete"){
    completeTask(element);
  }
  else if (elementJob =="delete") {
    binTask(element);
  }
  }
  localStorage.setItem("task", JSON.stringify(LIST));
);

clear.addEventListener('click', function(){
  localStorage.clear();
  location.reload();
});


let LIST,id;
let data = localStorage.getItem("task");
if(data){
  LIST = JSON.parse(data);
  loadTaskList(LIST);
  id = LIST.length;
}else{
  LIST = [];
  id = 0;
}

function loadTaskList(array){
  array.forEach(fucntion(item){
    addTask(item.task, item.id, item.done, item.bin);
  })
}
