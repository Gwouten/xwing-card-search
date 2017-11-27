export const filterResults = ({ text }, data) => {
  return data.filter((item) => {
    const queryText = text.toLowerCase();
    const itemName = item.name.toLowerCase();
    let itemText = '';
    if(item.hasOwnProperty('text')){
      itemText = item.text.toLowerCase();
    }

    if (itemName.includes(queryText) || itemText.includes(queryText)) {
      return true;
    } else {
      return false;
    }
  });
};

export default filterResults;
