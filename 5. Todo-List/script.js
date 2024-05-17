const item = document.querySelector("#item");
const todoBox = document.querySelector("#todo-box");


item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            AddTodo(this.value)
            this.value = "";
        }
    }
)

const AddTodo = (text) => {
    const listItem = document.createElement("li");
    listItem.classList.add("notes");
    listItem.innerHTML = `
    ${text}  
    <i class="trash fa-solid fa-xmark"></i>
    `

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )

    listItem.querySelector(".trash").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )

    todoBox.appendChild(listItem);
}



