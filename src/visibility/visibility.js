import sortMethodFunction from './sortMethods';

export const filterPilotResults = ({ text, faction, minPoints = -3, maxPoints = 100, sortMethod }, data, slots) => {

  // fix slots array from arguments to make duplicate string a single string, ex.: ["two", "two"] -> ["twotwo"]
  let array = slots;
  let newArray = [];
  let newSlots = [];
  let object = {}

  for(let i=0; i < array.length; i++){
    if(newArray.indexOf(array[i]) === -1) {
      object[array[i]] = [array[i]];
      newArray.push(array[i]);
    } else {
      object[array[i]].push(array[i]);
    }
  }

  for (var key in object) {
    if(object.hasOwnProperty(key)){
      newSlots.push(object[key].join(''));
    }
  }

  // filterString
  const filterString = (item) => {
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
  }

  return data

  // Filter on search string from input
  .filter((item) => filterString(item))

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

  // filter on upgrade slots
  .filter((item) => {
    const itemSlotsSorted = item.slots.sort().join('');
    let verified = [];
    newSlots.map((slot) => {
      verified.push(itemSlotsSorted.includes(slot));
    });
    return !verified.includes(false);

  })

  // sort results
  .sort(sortMethodFunction(sortMethod));
};

export const filterUpgradeResults = ({ text, faction, minPoints = -3, maxPoints = 100, sortMethod }, data) => {

  const filterString = (item) => {
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
  }

  return data

  // Filter on search string from input
  .filter((item) => filterString(item))

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
