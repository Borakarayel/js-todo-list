import { blankProjectLoad } from "./blank-project-load.js";

//DOM manipulation to display the UI components
export function initialdommanip (){
    
    //DOM for the heading
    const contentDiv = document.querySelector(".content");
    const heading = document.createElement("h1");
    heading.textContent = "ToDo WebApp";
    contentDiv.appendChild(heading);

    //DOM for the default project load
    const projectInfoDiv = document.createElement("div");
    projectInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectInfoDiv);
}