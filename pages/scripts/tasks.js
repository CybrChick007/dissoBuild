let $ = function(id) {
  return document.getElementById(id);
};

(function tasks(){
  // add task with enter key
    $('todo').addEventListener('submit',function(e){
    e.preventDefault();
    $('list').innerHTML += '<li>' + item.value + '</li>';
    save();
    $('item').value = "";
  },false)
  //add task with add button
  $('add').addEventListener('onclick',function(e){
  $('list').innerHTML += '<li>' + item.value + '</li>';
  save();
  $('item').value = "";
},false)

//complete and delete tasks
  list.addEventListener('click',function(e){
    let t = e.target;
    if(t.classList.contains('checked'))t.parentNode.removeChild(t);
    else t.classList.add('checked');
    save();
  },false)

  function save() {
    window.localStorage.myitems = $('list').innerHTML;
  }

  function get() {
    let saved = window.localStorage.myitems;
    if(!saved) {
      $('list').innerHTML =
        '<li>Live</li>'+
        '<li>Love</li>'+
        '<li>Code</li>'+
        '<li>Repeat</li>';
    }
    else {
      $('list').innerHTML = saved;
    }
  }
  get();
})();
