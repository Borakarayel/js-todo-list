
//Factory function to create blank project array list

export const blankProjectLoad = () => {
    console.log("blankProjectLoad module called ... Now creating blank project array");
    let projectsArray = [];
    console.log("Pushing the title name of project to the projectArray...");
    let projectTitle = "Demo Project";
    projectsArray.push({projectTitle});
    console.log(projectsArray);
    return {projectsArray, projectTitle}; 
}