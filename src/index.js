import {createToDo} from './create-to-do.js';
import {blankProjectLoad} from './blank-project-load.js';
import {displayDefaultProject, displayTheForm, addItemToCheckList, clearForm, displayToDo} from './dom-manip.js';
import './style.css';

//call blank-project-load at first land
blankProjectLoad();

//call DOM manipulation module to load default project
//displayDefaultProject();

//call displayToDo on first land - pulls from web local storage API (if any)
displayToDo();

//TODO: click events module
let clickEventsModule = (function() {

    //click event for displaying the form
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);

    //click event for adding an item to the checklist on the form
    const addToCheckList = document.querySelector(".add-to-checklist");
    addToCheckList.addEventListener("click", addItemToCheckList);
    
    //click event to clear the form
    const clearButton = document.querySelector(".reset-button");
    clearButton.addEventListener("click", clearForm);

    //Click event to submit a new todo form to project
    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", createToDo);

}) ();