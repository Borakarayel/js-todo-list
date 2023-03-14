import { compareAsc, format, parseISO, startOfToday } from 'date-fns';
import { clearForm } from './dom-manip.js';
import { saveToDoToLocal } from './manage-local-storage.js';

//Crating an array fot ToDo, if needed down the road
let toDoArray = [];

//Factory Function to create todo List
export const createToDo = () => { 

    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    //Check if any field is empty
    if (Title == "" || Description == "" || DueDate == "" || Priority == ""){
        alert("Missing field, please try again!")
        return;
    }
    //Check to see if a pre-date was entered
    if (parseISO(DueDate) < startOfToday()) {
        alert("You've entered a date that has already passed! Please enter a correct date.");
        console.log('due date', parseISO(DueDate));
        console.log('date now', startOfToday());
        return;
    }

    //Loop over the nodelist for check list items from the DOM and format to string
    const nodeListCheckList = document.querySelectorAll(".form-li");
    let _CheckListArray = [];    
    for (let i = 0; i<nodeListCheckList.length; i++){
        
        //Strip off the "x" from end of each li then push to temp array
        let strippedCheckList = nodeListCheckList[i].textContent.replace("\u00D7", '');
        _CheckListArray.push(strippedCheckList);
        }

    //Strip off the checklist array and convert to string with commas 
    let CheckList = _CheckListArray.join(", ");
    
    console.log("Called createToDo module... creating todo now");
    console.log({Title, Description, DueDate, Priority, CheckList} );
    console.log("Pushing this object to the toDoArray.....");

    //TODO: remove below two lines of code if array is not needed
    toDoArray.push({Title, Description, DueDate, Priority, CheckList});
    console.log(toDoArray);

    //Call storage module and push object to local storage
    saveToDoToLocal({Title, Description, DueDate, Priority}, CheckList);

    //Reset the form after successful submission
    clearForm();

    return {Title, Description, DueDate, Priority }, CheckList;
}