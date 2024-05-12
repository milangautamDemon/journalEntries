import './style.css'

//create new div to insert inside journalItems-wrapper
const entryListsWrapper = document.createElement("div");
entryListsWrapper.classList = "lists-wrapper" ;

const journalItemsWrapper = document.querySelector(".journalItems-wrapper");
//prepand enterlists in outer wrapper
journalItemsWrapper.prepend(entryListsWrapper);

//access to the button
const addNewlists = document.querySelector(".addNewList-btn");

//event on the button to add new list
addNewlists.addEventListener("click", () =>{
        const newList = document.createElement("div");
        newList.classList = "border-2 border-solid border-gray-700";

        entryListsWrapper.appendChild(newList);
})