

var num = 1;

function deleteTodo(){


    var list = document.getElementById('list');
    console.log(this.id[3]);
    item = document.getElementById('li'+this.id[3]);
    item.parentNode.removeChild(item);
}

function moveUpp(){
  var list = document.getElementById("list");
  var i1 = document.getElementById(this.id);
    i1.parentNode.parentNode.insertBefore(i1.parentNode,i1.parentNode.previousSibling);

}

function moveDownn(){
  var list = document.getElementById("list");
  var i1 = document.getElementById(this.id);
    i1.parentNode.parentNode.insertBefore(i1.parentNode,i1.parentNode.nextSibling.nextSibling);
}



function addTodo(){
  var item = document.getElementsByClassName('list-data')[0];
  console.log(item);

  var list = document.getElementById('list');
  var li = document.createElement('li');
  node = document.createTextNode(item.value);
  btn = document.createElement('button');
  moveUp = document.createElement('button');
  moveDown = document.createElement('button');

  moveUp.innerHTML = "Up";
  moveUp.id = "up"+num;
  moveUp.onclick = moveUpp

  moveDown.innerHTML = "Down";
  moveDown.id = "down"+num;
  moveDown.onclick = moveDownn

  btn.innerHTML = "Delete";
  li.id = "li"+num;
  btn.id = "btn" + num++;
  btn.onclick = deleteTodo

  li.appendChild(node);
  li.appendChild(btn);
  li.appendChild(moveUp);
  li.appendChild(moveDown);

  list.appendChild(li);
}
