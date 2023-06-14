export function editItem(id, newText,data) {
    data.find((item) => { if (item && item.id === id) {
      item.text = newText;
      return data;
      }
    });
  }
 