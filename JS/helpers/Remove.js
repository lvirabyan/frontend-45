export const removeElem = function(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
   }; 