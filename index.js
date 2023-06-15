import {data} from "./JS/data.js";
import { removeElem } from "./JS/helpers/Remove.js";
import {createNewItem} from "./JS/helpers/AddItem.js";
import { create_Element, create_input , create_Dօne} from "./JS/helpers/Create.js";
import { editItem,  } from "./JS/helpers/Methods.js";
const root = document.querySelector(".content");

function render () {
  removeElem(root);
  create(create_list_item); 
 };

 function addItem(value){
  data.push(createNewItem(value));
 }
let create = function (f) {
  create_Element("h2", root, "To do List");
  create_Dօne(data, root); 

  let content = create_Element("div", root);
  
  for(let i = 0; i < data.length; i++){
    f(data[i].text, content, "item-list", data[i].id, data[i].checked);
    if(data[i].checked){
      data[i].done = true;
    }else{
      data[i].done = false;
    }
  }
  let footerInput = create_Element("div", root, undefined, "flex");
  let input = create_input("text", "Type a new text", footerInput,"input_text");
  let button =  create_Element("BUTTON", footerInput, "Add", "btnAdd");
    button.addEventListener("click",() => {
      addItem(input.value);
      render();
     });
 };


  function create_list_item (innerText, content, className, id, checked){
  
  let div = create_Element("div", content, undefined, className);





  let inputCheckbox = create_Element("input", div, undefined, "checkbox");
  inputCheckbox.setAttribute("type", "checkbox");
  if(checked){
    inputCheckbox.setAttribute("checked", "checked");
  }
  inputCheckbox.addEventListener('change', function() {
    if (checked) {
      inputCheckbox.removeAttribute("checked");
      data.find((item) => { if (item && item.id === id) {
        item.checked = !checked;
        };
      });
      render();
    } else {
      inputCheckbox.setAttribute("checked", "checked");
      data.find((item) => { 
        if (item && item.id === id){
        item.checked = !checked;
        }});
    }
    render()
  });
  let text = create_Element("p", div, innerText, "text");
  text.textContent = innerText;
  text.addEventListener("click", () => {
    text.contentEditable = "true";
    text.focus();
  });

function timerCounter(){
let timer = create_Element("BUTTON", div,"Deadline", "btnEdit")
div.appendChild(timer);
let timerInput = create_input("date","2023, 6, 15", div)
timer.addEventListener("click",()=>{
if(timerInput.value){
    let dataParts = timerInput.value.split("-");

    let year = parseInt(dataParts[0]);
    let month = parseInt(dataParts[1]) - 1; 
    let day = parseInt(dataParts[2]);
    
    let deadline = new Date(year, month, day);
    let now = new Date(); 
    let milliseconds = deadline.getTime() - now.getTime();
      milliseconds = 5000; 
      if (milliseconds > 2) {
        window.setTimeout(function() {
          alert("You have 2 second", "text")
        }, milliseconds);
      }
  } else {
    alert("Please set the Deadline date")
  }

})
}
timerCounter()




  let editeButton = create_Element("BUTTON", div, "Edit", "btnEdit");
  editeButton.addEventListener("click", () => {
    const itemId = data.find(item => item.text === innerText).id;
    editItem(itemId, text.textContent, data);
  });
  let removeButton = create_Element("BUTTON", div, "Delete", "btn");
  removeButton.addEventListener("click", () => {
    let index = data.findIndex(item => item.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      render();
    }
  });

};

 create(create_list_item);