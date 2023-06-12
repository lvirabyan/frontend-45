const generateUniqueId = function() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000000);
    return `${timestamp}_${random}`;
  };
export const createNewItem = function(text){
    let item = {
      id: generateUniqueId(),
      text: text,
      checked: false,
      priority: 2,
      done: false,
      time: "1 hour"
    };
    return item;
  };