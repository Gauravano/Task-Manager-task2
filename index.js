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
  var deleteBox = `<i id='${delId}' class='fa fa-trash' onclick='deleteTodo(id)' title='Delete this task'></i>`

  html += checkBox+ `<span class='col-md-9 col-xs-6'>${item.value}</span>` + arrowUp + arrowDown + deleteBox +"</li>";
  $('ul').append(html);
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
}

function clearAll(){
    $('#list').empty();
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
}
