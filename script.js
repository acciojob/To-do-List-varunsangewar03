//your code here
const input = document.getElementById("newTodoInput");
const botton = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

button.addEventListener("click", function(){
	const value = input.value.trim();

	if(value === ""){
		return;
	}

	const li = document.createElement("li");
	li.textContent = value;
	
	todoList.appendChild(li);

	input.value = "";
});
