
import {createToDo} from './create-to-do.js';
import {blankProjectLoad} from './blank-project-load.js';
import { initialdommanip } from './initial-dom-manip.js';

//call blank-project-load at first land
blankProjectLoad();

//call DOM manipulation module to control UI
initialdommanip();

//TODO: click event module Here for todo and project creations 

//call create-to-do.js module file and apply some objects/properties (this will eventually be replaced b UI Input)
const myToDo = createToDo("Shopping", "Go Shopping", "6/3/2023", "medium", "meat, eggs, milk");
const myToDo2 = createToDo("Homework", "Do Odin Project", "6/3/2023", "high", "Complete ToDo List Project, Move to the next section");
console.log("Show the properties on myToDo: ", myToDo)
console.log("Show the properties on myToDo: ", myToDo2)