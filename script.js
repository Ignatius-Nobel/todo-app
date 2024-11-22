const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

const addTask = () => {
    if (inputBox.value === ''){
        alert("Please enter the task!");
    }else{
    let task = document.createElement("li");
    task.innerHTML = inputBox.value;
    listContainer.append(task); 
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    task.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)


const saveData = () => {
    localStorage.setItem("data",listContainer.innerHTML)
}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();