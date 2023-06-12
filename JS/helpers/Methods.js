export function editItem(id, newText) {
    data.find((item) => { if (item && item.id === id) {
      item.text = newText;
      return data;
      }
    });
  }
 