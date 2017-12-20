import sortMethodFunction from './sortMethods';

// filterString
// const filterString = (item, textArray) => {
//   // const queryText = text.toLowerCase();
//   const itemName = item.name.toLowerCase();
//   let itemText = '';
//   if(item.hasOwnProperty('text')){
//     itemText = item.text.toLowerCase();
//   }
//
//   if (itemName.includes(queryText) || itemText.includes(queryText)) {
//     return true;
//   } else {
//     return false;
//   }
// }

  const filterString = (item, textArray) => {

     const itemName = item.name.toLowerCase();
     let itemText = '';

     if(item.hasOwnProperty('text')){
       itemText = item.text.toLowerCase();
     }

     const result = textArray.map((text) => {
       text = text.toLowerCase();
       return itemName.includes(text) || itemText.includes(text);
     });

     return result.indexOf(false) == -1; // all search terms are found, in no specific order
  }

// filter on faction
const filterFaction = (item, faction) => {
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
}

// filter on points values
const filterValues = (item, minPoints, maxPoints) => item.points >= minPoints && item.points <= maxPoints

export const filterPilotResults = ({ text, faction, minPoints = -3, maxPoints = 100, sortMethod }, data, slots) => {

  // fix slots array from arguments to make duplicate string a single string, ex.: ["two", "two"] -> ["twotwo"]
  let array = slots;
  let newArray = [];
  let newSlots = [];
  let object = {}

  array.map((item) => {
    // replace string 'Salvaged Astromech' with 'Aggromech'
    if(item === 'Salvaged Astromech'){
      item = 'Aggromech';
    }

    if(newArray.indexOf(item) === -1) {
      object[item] = [item];
      newArray.push(item);
    } else {
      object[item].push(item);
    }
  });

  for (var key in object) {
    if(object.hasOwnProperty(key)){
      newSlots.push(object[key].join(''));
    }
  }

  // Convert text string to array to allow AND/OR searches
  const textArray = text.split(' ').map((item) => item.toLowerCase());
  console.log(textArray);

  return data
  .filter((item) => filterString(item, textArray))
  .filter((item) => filterFaction(item, faction))
  .filter((item) => filterValues(item, minPoints, maxPoints))
  // filter on upgrade slots
  .filter((item) => {
    const itemSlotsSorted = item.slots.sort().join('').replace(/(Salvaged Astromech)/, 'Aggromech');
    let verified = [];
    newSlots.map((slot) => {
      verified.push(itemSlotsSorted.includes(slot));
    });
    return !verified.includes(false);

  })

  // sort results
  .sort(sortMethodFunction(sortMethod));
};

export const filterUpgradeResults = ({ text, faction, minPoints = -3, maxPoints = 100, sortMethod }, data, slots) => {

  const textArray = text.split(' ').map((item) => item.toLowerCase());

  return data
  .filter((item) => filterString(item, textArray))
  .filter((item) => filterFaction(item, faction))
  .filter((item) => filterValues(item, minPoints, maxPoints))
  // filter on card type
  .filter((item) => {
    if(slots.length === 0) {
      return true;
    } else {
      return slots.includes(item.slot);
    }
  })
  .sort(sortMethodFunction(sortMethod));
};
