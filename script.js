//variables
var count = 0;
var checked = 0;


const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

/*
This function calls addTask() to attach a <li> element
to the list, focuses the text cursor on the recently
created element and updates the item count and the
unchecked elements count.

*/

function newTodo() {

  list.appendChild(addTask());
  document.getElementsByClassName("todo-text")[count].focus();
  count++;
  checked++;
  updateItemCount();
  updateCheckedCount();
}

/*

This function creates a <li> element and associates it
with the giving class "TODO-ITEM". Then creates 3
variables using the corresponding methods to obtain a
checkbox, a text input and a button to finally attach them
to the <li> element and return it.

*/

function addTask(){
  var li = document.createElement("LI");
  li.className = classNames["TODO_ITEM"];
  
  chk = addCheck();
  lbl = addLabel();
  btn = addButton();
  
  li.appendChild(chk);
  li.appendChild(label);
  li.appendChild(btn);

  return li;
}

/*
Creates a checkbox element setting the default onclick operation to
"checkChecked" and defines it's class to an existing one called "TODO-CHECKBOX".
Returns the checkbox element.

*/

function addCheck(){
  check = document.createElement("input");
  check.type = "checkbox";
  check.className = classNames["TODO_CHECKBOX"];
  check.setAttribute("onClick","checkChecked(event)");
  return check;
}

/*
Creates an input text element setting a default placeholder and
defining it's class to an existing one called "TODO-TEXT".
Returns the text element.

*/

function addLabel(){
  label = document.createElement("input");
  label.type = "text";
  label.className = classNames["TODO_TEXT"];
  label.placeholder = "New Task!";
  return label;  
}

/*
Creates a button element setting a default inner text,
defining it's class to an existing one called "TODO-DELETE"
and setting its "onclick" function to "deleteTask".
Returns the button.

*/
function addButton(){ 
  text = document.createTextNode("Delete Task");
  buttn = document.createElement("Button");
  buttn.className = classNames["TODO_DELETE"];
  buttn.setAttribute("onClick","deleteTask(event)")
  buttn.appendChild(text);
  return buttn;
}


/*
Checks the status of clicked checkbox: If it's checked
it will substract 1 to checked final value, or will add
1 in the opposite case.
*/
function checkChecked(event){
  if(event.target.checked==true){
    checked--;
    updateCheckedCount();
  }else{
    checked++;
    updateCheckedCount();
  } 
}

/*
Stores the <li> element which contains the clicked element,
substracts 1 from the count variable and makes sure if the checkbox contained
in the stored <li> element is checked. If so the checked variable also substracts 1 to
its value. 
Finally once checks are done, using the shortcut variable "list" it removes the stored <li> element
and proceeds to update the item count and checked count.

*/
function deleteTask(event){
  child = event.target.parentElement;
  count--;
  if(child.getElementsByTagName("input")[0].checked==false){
    checked--;
  }
  list.removeChild(child);
  updateItemCount();
  updateCheckedCount();
  
}


//Updates the Item shown value to the count variable.

function updateItemCount(){
  itemCountSpan.innerHTML = count;
}

//Updates the Check count shown value to the checked variable
function updateCheckedCount(){
  uncheckedCountSpan.innerHTML = checked;
}