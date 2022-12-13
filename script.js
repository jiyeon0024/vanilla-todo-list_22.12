console.log("hi")


const Todos = document.querySelector(".todos");
const SubmitBtn = document.querySelector(".submitBtn");
const List= document.querySelector(".listWrap");




SubmitBtn.addEventListener("click",AddTodo);
List.addEventListener("click",TodoListsBtn);



function AddTodo(e){
    e.preventDefault();

    if(Todos.value.length!=0){

        const list = document.createElement("div");
        const List1 = document.createElement("li");
        List1.innerText = Todos.value;
        Todos.value="";
        List1.classList.add("todoList");
        List.appendChild(List1);

        const Complete_Btn = document.createElement("button");
        const Del_btn = document.createElement("button");

        Complete_Btn.classList.add("complete");
        Complete_Btn.innerText="Done"
        Del_btn.classList.add("delete");
        Del_btn.innerText="Delete"
        List1.appendChild(Complete_Btn);
        List1.appendChild(Del_btn);
        List.appendChild(list);



    }else{
        alert("Enter your task");

    }
   
}


//
 function TodoListsBtn(e){
    const item = e.target;
    if(item.classList[0]==="delete"){
        const todo = item.parentNode;
        todo.remove();
    }
    console.log(item.previousSibling);
    }
