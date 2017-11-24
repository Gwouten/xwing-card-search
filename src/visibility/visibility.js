export const filterResults = ({ text }, data) => {
  console.log('data', data);
  console.log('text', text);
  return data.filter((item) => {
    console.log('item', item);
    return item.text.includes(text);
  });
};

export default filterResults;
