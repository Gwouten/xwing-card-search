import sortMethodFunction from './sortMethods';

export const filterResults = ({ text, faction, minPoints = -3, maxPoints = 100, sortMethod }, data, slots) => {

  return data

  // Filter on search string from input
  .filter((item) => {
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
  })

  // filter on faction
  .filter((item) => {
    if(faction === 'any') {
      return true;
    } else {
      // Set all subfactions to standard factions
      let itemFaction = '';
      switch(item.faction) {
        case 'Rebel Alliance':
        itemFaction = 'rebel';
        return itemFaction === faction;

        case 'Galactic Empire':
        itemFaction = 'empire';
        return itemFaction === faction;

        case 'Scum and Villainy':
        itemFaction = 'scum';
        return itemFaction === faction;

        case 'First Order':
        itemFaction = 'empire';
        return itemFaction === faction;

        case 'Resistance':
        itemFaction = 'rebel';
        return itemFaction === faction;

        default:
        itemFaction = 'any';
      }
    }
  })

  // filter on min and max values
  .filter((item) => {
    return item.points >= minPoints && item.points <= maxPoints;
  })
  .sort(sortMethodFunction(sortMethod));
};


export default filterResults;
