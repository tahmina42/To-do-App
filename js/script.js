const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById('list-container');
const submitBtn = document.getElementById("submit-btn");

function addTask() {

    if (inputBox.value === "") {
        alert('You must write something!');
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
    saveLocalData();
}
submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addTask();
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveLocalData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveLocalData();
    }
}, false);

function saveLocalData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();