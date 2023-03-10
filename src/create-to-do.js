//Crating an array fot ToDo, if needed down the road

let toDoArray = [];

//Factory Function to create todo List
export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    console.log("Called createToDo module... creating todo now");
    console.log({Title, Description, DueDate, Priority, CheckList});
    console.log("Pushing this object to the toDoArray.....");

    //TODO: remove below two lines of code if array is not needed
    toDoArray.push({Title, Description, DueDate, Priority, CheckList});
    console.log(toDoArray);
    return {Title, Description, DueDate, Priority, CheckList}
}