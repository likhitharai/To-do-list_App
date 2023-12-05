// Take the ID of the input box 
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

// To check and uncheck on click - To mark it as complete or to remove the element rom the listed item

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);




// The code or elemenets must remain in place even if we try to reload the page
// We can store all the data in the browser's local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Display the data whenever we open the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

