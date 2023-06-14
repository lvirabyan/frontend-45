
export const create_Element = function (type, parent, innerText, className){
    let element = document.createElement(type);
    if(innerText){  element.innerHTML = innerText;}
    if(className){  element.classList.add(className);}
    parent.appendChild(element);
    return element;
  };

export const create_input = function (type, placeholder, parent,className){
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("class", className);
    parent.appendChild(input);
    return input;
  };
  export function create_Dօne (data, parent){
    let done = create_Element("div", parent, undefined, "new" );
    
    let divDone = create_Element("div", done, undefined, "dօne" );
    done.appendChild(divDone)
    let divTasks = create_Element("div", done, undefined, "dօne" );
    done.appendChild(divTasks)
  
    let count = 0;
    for(let i = 0; i< data.length; i++){
      if(data[i].done || data[i].checked){
        count++;
      }
    }
    let tasks = create_Element("p", divDone, "Tasks", "text-element");
      divDone.appendChild(tasks);
    const spanElement = create_Element("span", divDone, `${data.length}`, "span-element");
      divDone.appendChild(spanElement);
    let tasks_Done = create_Element("p", divTasks, "Tasks_Done", "text-element");
      divTasks.appendChild(tasks_Done);
    const span_Done = create_Element("span", divTasks, `${count}`, "span-element");
    divTasks.appendChild(span_Done);
   }