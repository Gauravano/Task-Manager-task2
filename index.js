


var num = 1;

function deleteTodo(id){
    var list = document.getElementById('list');
    var temp = document.getElementById(id);

    temp.parentNode.parentNode.removeChild(temp.parentNode);
}

function moveUpp(id){
  var list = document.getElementById("list");
  var i1 = document.getElementById(id);
    i1.parentNode.parentNode.insertBefore(i1.parentNode,i1.parentNode.previousSibling);

}

function moveDownn(id){
  var list = document.getElementById("list");
  var i1 = document.getElementById(id);
    i1.parentNode.parentNode.insertBefore(i1.parentNode,i1.parentNode.nextSibling.nextSibling);
}



function addTodo(){
  var item = document.getElementsByClassName('list-data')[0];
  console.log(item);

  var list = document.getElementById('list');

  var html = "<li class='unchecked'>"

  var upId = "up"+num;
  var downId = "down"+num;
  var checkId = 'check'+num;
  var delId =  "btn"+num++

  var checkBox = `<input type="checkbox" onclick="markComplete(id)" id='${checkId}'>`
  var arrowUp = `<i id='${upId}' class='fa fa-arrow-up' onclick='moveUpp(id)' title='Move this task up'></i>`
  var arrowDown = `<i id='${downId}'class='fa fa-arrow-down' onclick='moveDownn(id)' title='Move this task down'></i>`
  var deleteBox = `<i id='${delId}' class='fa fa-trash' onclick='deleteTodo(id)' title='Delete this task'></i>`

  html += checkBox+ `<span>${item.value}</span>` + arrowUp + arrowDown + deleteBox +"</li>";
$('ul').append(html);


    // document.getElementById('todos').innerHTML = html;
    //
    // var buttons = document.getElementsByClassName('remove');
    // for (var i=0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', remove);
    // };
  // var li = document.createElement('li');
  // node = document.createTextNode(item.value);
  // btn = document.createElement('button');
  // moveUp = document.createElement('button');
  // moveDown = document.createElement('button');
  //
  // moveUp.innerHTML = "Up";
  // moveUp.id = "up"+num;
  // moveUp.onclick = moveUpp
  //
  // moveDown.innerHTML = "Down";
  // moveDown.id = "down"+num;
  // moveDown.onclick = moveDownn
  //
  // btn.innerHTML = "Delete";
  // li.id = "li"+num;
  // btn.id = "btn" + num++;
  // btn.onclick = deleteTodo
  //
  // li.appendChild(node);
  // li.appendChild(btn);
  // li.appendChild(moveUp);
  // li.appendChild(moveDown);
  //
  // list.appendChild(li);
}

function sortAll(){

}

function clearAll(){
  console.log("clearing");
    $('#list').empty();
}

function markComplete(id){
  var newId = '#'+id;
  var box = document.getElementById(id);
  console.log("Inside box"+$(newId).prop("checked"));

  if($(newId).prop("checked") == true){
    box.parentNode.style = "background: #888; color: #fff; text-decoration: line-through;"
  }else{
    box.parentNode.style = "background: white; color:black; text-decoration: none;"
  }
}
