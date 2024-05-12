import './style.css';
import { appendFunction } from './reusableFunc.js';
import {updateParticulars, updateDebit, updateCredit} from "./inputFunction.js"

//create new div to insert inside journalItems-wrapper
const entryListsWrapper = document.createElement("div");
entryListsWrapper.classList = "lists-wrapper" ;

//access to the button
const addNewlists = document.querySelector(".addNewList-btn");

const journalItemsWrapper = document.querySelector(".journalItems-wrapper");
//prepand enterlists in outer wrapper
journalItemsWrapper.prepend(entryListsWrapper);

// Select the input
const particularsInput = document.querySelector("#Particulars");
const debitInput = document.querySelector("#Debit");
const creditInput = document.querySelector("#Credit");

// Event listeners for input changes
particularsInput.addEventListener("change", updateParticulars);
debitInput.addEventListener("change", updateDebit);
creditInput.addEventListener("change", updateCredit);


const createAndAppendList = () => {

    //create list
    const newList = document.createElement("div");
    newList.classList = "flex flex-row-reverse border-2 border-solid border-gray-200 p-2";

    const credit = document.createElement("p");
    credit.classList = "w-1/5";
    credit.textContent = creditInput.value; // Use the current value of the input

    const debit = document.createElement("p");
    debit.classList = "w-1/5";
    debit.textContent = debitInput.value; // Use the current value of the input

    const particular = document.createElement("p");
    particular.classList = "w-2/5";
    particular.textContent = particularsInput.value;


    //create delete icon wrapper
    const deleteiconwrapper = document.createElement("div");
    deleteiconwrapper.classList = "flex w-1/5";
    //create delete icon
    const eachItemDelete = document.createElement("div");
    eachItemDelete.classList = "btn-small-danger";
    eachItemDelete.innerHTML = "<i class='fa-solid fa-x'></i>";
    //appending delete button in wrapper
    deleteiconwrapper.appendChild(eachItemDelete);

    //append all child of new list in newlist using reusable function
    appendFunction(newList, [credit, debit, particular, deleteiconwrapper]);

    entryListsWrapper.appendChild(newList);
}

//event on the button to add new list
addNewlists.addEventListener("click", (e) =>{
    e.preventDefault();
    createAndAppendList();

})