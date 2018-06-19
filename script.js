
function loadList(){
  listitems = JSON.parse(localStorage['list']);

  for(i=0;i<listitems.length;i++){
    var list = document.getElementById('list');
    var upId = "up"+num;
    var downId = "down"+num;
    var checkId = 'check'+num;
    var delId =  "btn"+num++

    if(listitems[i].checked == true){
      var sty="style='text-decoration:line-through;'"
      var chStatus = "checked"
    }else{
      var sty="style='text-decoration:none;'"
      chStatus = "unchecked"
    }

    var html = `<li class=${chStatus}>`
    var checkBox = `<input class="col-md-1 col-xs-1" type="checkbox" onclick="markComplete(id)" id='${checkId}' ${chStatus}>`
    var arrowUp = `<i id='${upId}' class='fa fa-arrow-up' onclick='moveUpp(id)' title='Move this task up'></i>`
    var arrowDown = `<i id='${downId}'class='fa fa-arrow-down' onclick='moveDownn(id)' title='Move this task down'></i>`
    var deleteBox = `<i id='${delId}' class='fa fa-times-circle' onclick='deleteTodo(id)' title='Delete this task'></i>`

    html += checkBox+ `<span class='col-md-9 col-xs-6' ${sty}>${listitems[i].data}</span>` + arrowUp + arrowDown + deleteBox +"</li>";
    $('#list').append(html);
  }
  arrowDisplay();
}

function Item(data,checked){
    this.data = data
    this.checked = checked
}

var num = 1;
var todo = []

function makeArray(){
  todo = []
  var mylist = $('ul');
  var listitems = mylist.children('li').get();

  for (var i = 0; i < listitems.length; i++) {
    if(listitems[i].className == "checked"){
      var temp = true
    }else{
      var temp = false;
    }

    todo.push(new Item(listitems[i].innerText,temp));
    $('li')[i].childNodes[2].style.visibility = "visible";
    $('li')[i].childNodes[3].style.visibility = "visible";
  }
  localStorage['list'] = JSON.stringify(todo);
  arrowDisplay()
}

function deleteTodo(id){
    var list = document.getElementById('list');
    var temp = document.getElementById(id);

    temp.parentNode.parentNode.removeChild(temp.parentNode);

    makeArray();
}

function moveUpp(id){
  var list = document.getElementById("list");
  var i1 = document.getElementById(id);
  i1.parentNode.parentNode.insertBefore(i1.parentNode,i1.parentNode.previousSibling);

  makeArray();
}

function moveDownn(id){
  var list = document.getElementById("list");
  var i1 = document.getElementById(id);
  i1.parentNode.parentNode.insertBefore(i1.parentNode,i1.parentNode.nextSibling.nextSibling);

  makeArray();
}

function addTodo(){
  var item = document.getElementsByClassName('list-data')[0];
  if(item.value ==""){
    alert("Please enter a valid task!");
    return;
  }

  var list = document.getElementById('list');
  var upId = "up"+num;
  var downId = "down"+num;
  var checkId = 'check'+num;
  var delId =  "btn"+num++

  var html = "<li class='unchecked'>"
  var checkBox = `<input class="col-md-1 col-xs-1" type="checkbox" onclick="markComplete(id)" id='${checkId}'>`
  var arrowUp = `<i id='${upId}' class='fa fa-arrow-up' onclick='moveUpp(id)' title='Move this task up'></i>`
  var arrowDown = `<i id='${downId}'class='fa fa-arrow-down' onclick='moveDownn(id)' title='Move this task down'></i>`
  var deleteBox = `<i id='${delId}' class='fa fa-times-circle' onclick='deleteTodo(id)' title='Delete this task'></i>`

  html += checkBox+ `<span class='col-md-9 col-xs-6'>${item.value}</span>` + arrowUp + arrowDown + deleteBox +"</li>";
  $('#list').append(html);
  item.value = ""
  makeArray();
}

function sortAll(){

      var mylist = $('ul');
      var listitems = mylist.children('li').get();

      console.log(listitems);

      var check = [];
      var uncheck = [];

      for (var i = 0; i < listitems.length; i++) {
          if(listitems[i].className == "checked" ){
            check.push(listitems[i]);
          }else{
            uncheck.push(listitems[i]);
          }
      }
      console.log(check,uncheck);
      $('#list').empty();
      $('#list').append(uncheck);
      $('#list').append(check);

      makeArray();
}

function clearAll(){
    $('#list').empty();
    makeArray();
}

function markComplete(id){
  var newId = '#'+id;
  var box = document.getElementById(id);

  if($(newId).prop("checked") == true){
    box.parentNode.className = "checked"
    box.parentNode.style = "background: #888; color: #fff; text-decoration: line-through;"
    box.nextSibling.style = "text-decoration:line-through;"
  }else{
    box.parentNode.className = "unchecked"
    box.parentNode.style = "background: white; color:black; text-decoration: none;"
    box.nextSibling.style = "text-decoration:none;"
  }

  makeArray();
}

function clearChecked(){
        var mylist = $('ul');
        var listitems = mylist.children('li').get();


        for (var i = 0; i < listitems.length; i++) {
            if(listitems[i].className == "checked" ){
              listitems[i].parentNode.removeChild(listitems[i]);
            }
            console.log(listitems);
        }
        makeArray();
}

function arrowDisplay(){
  $('li')[0].childNodes[2].style.visibility = "hidden"
  $('li').last()[0].childNodes[3].style.visibility = "hidden"
}
