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