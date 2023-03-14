import { blankProjectLoad } from "./blank-project-load.js";

//DOM manipulation to display the UI components
export function displayDefaultProject (){
    
    //DOM for the default project load
    const projectInfoDiv = document.createElement("div");
    projectInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectInfoDiv);
}

export function displayTheForm(){
    document.getElementById("add-todo-form").style.display = "";
}

export function addItemToCheckList(){
    const addItem = document.getElementById("add-to-checklist").value;
    
    //Run check to see if the input box is empty and button was clicked
    //if so, return out of this function - do nothing
    //if not, apply contents to new li in DOM
    if (addItem !== ""){
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u00D7");
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = "";
        
        
        //DOM check for existing check list items already present
        if (document.querySelectorAll("li").length > 0){
            console.log("INSIDE MODULE IF .....,", document.querySelectorAll("li").length);
            const nodeListCheckList = document.querySelectorAll("li")
            console.log(nodeListCheckList);
            
            //DOM to bind click to each node in nodelist and remove node if clicked
            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist(){
                    checkListItem.remove();
                });
            })
        }
    } else return;
}

export function clearForm(){
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i<nodeListCheckList.length; i++){
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}

export function displayToDo(){

    //Gather data from local backend storage and initialize
    let Title = localStorage.getItem("Title");
    let Description = localStorage.getItem("Description");
    let DueDate = localStorage.getItem("DueDate");
    let Priority = localStorage.getItem("Priority");
    let CheckList = localStorage.getItem("CheckList");

    //Check to ensure local storage os present to load, otherwise return out - avoid crash
    if (Title == null || Description == null || DueDate == null || Priority == null){
        return;
    }

    //Check and clear current display DOM, if any
    const removeDivs = document.querySelectorAll(".card");
    for (let i=0; 1<removeDivs.length; i++){
        removeDivs[i].remove();
    }

    //Create the display card for the display DOM
    console.log("display to screen");
    const projects = document.querySelector(".projects");
    const card = document.createElement("div");
    card.classList.add("card");
    projects.appendChild(card);

    //Create delete todo card button/event listener to remove card from display
    const deleteToDoButton = document.createElement("button");
    deleteToDoButton.classList.add("remove-todo-button");
    deleteToDoButton.textContent = "Delete/Complete ToDo";
    card.appendChild(deleteToDoButton);
    deleteToDoButton.addEventListener("click", function deleteToDo(){
        card.remove();
        localStorage.clear();
    });

    //Place data in Local Temp array and loop over key/value pairs and display to DOM
    let _displayArray = {Title, Description, DueDate, Priority, CheckList};
    console.log(_displayArray);

    for (let key in _displayArray){
        console.log(`${key}: ${_displayArray[key]}`);
        const para = document.createElement("p");
        para.textContent = (`${key}: ${_displayArray[key]}`);
        card.appendChild(para);
        
    }

    //DOM for checklist Items to present to right side display area
    const para = document.querySelectorAll("p");
    const CheckListLabel = document.createElement("p");
    CheckListLabel.textContent = "CheckList Items (Click item when completed):";
    const ul = document.createElement("ul");
    CheckListLabel.classList.add("check-list-label");
    para[para.length-1].appendChild(ul);
    ul.appendChild(CheckListLabel);

    console.log("Show me the contents of checklist from local storage...", CheckList);
    let  _checkListArray = CheckList.split(", ");
    console.log("contents of temp checklistarray...", _checkListArray);

    if (CheckList !== "") {
        //Loop through the temp checklistarray to create an li and display to DOM for each
            for (let i=0; i < _checkListArray.length; i++){
                console.log(_checkListArray[i]);
                const li = document.createElement("li");
                li.className = "display-li";
                li.textContent = _checkListArray[i];

        //Add Listeners onto each li and toggle CSS class to strike through on display
        li.addEventListener("click", function strikeOutCheckListItem(){
            if (li.classList.toggle("done")){
                localStorage.setItem(li.textContent, "true");
            } else if (li.classList.toggle("display-li")){
                localStorage.setItem(li.textContent, "false");
            }
        });

        ul.appendChild(li);
        }
    } else return;


//call on page refresh to check for existing strike throughs
window.onload = function(){

    //Loop through current display li's on DOM and assign strike though CSS if local Storage API Flag is set
    const liNodes = documents.querySelectorAll(".display-li");
    liNodes.forEach(liNode => {
        if (localStorage.getItem(liNode.textContent)=="true"){
            console.log("inside the onload if ...");
            liNode.className = "done";
        }
    })
 }
}