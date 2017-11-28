// Sort alphabetically ascending
const setSortString = (string) => {return string.toUpperCase().replace(/"/g, '')}
let comparison = 0;

const sortMethodFunction = (sortMethod) => {
  switch(sortMethod) {
    case 'sortAZ':
    return (a, b) => {
      const aName = setSortString(a.name);
      const bName = setSortString(b.name);

      if(aName > bName) {
        comparison = 1;
      } else {
        comparison = -1;
      }
      return comparison;
    };

    case 'sortZA':
    return (a, b) => {
      const aName = setSortString(a.name);
      const bName = setSortString(b.name);

      if(aName > bName) {
        comparison = -1;
      } else {
        comparison = 1;
      }
      return comparison;
    };

    case 'psAsc':
    return (a, b) => {

      if(a.skill > b.skill) {
        comparison = 1;
      } else {
        comparison = -1;
      }
      return comparison;
    };

    case 'psDesc':
    return (a, b) => {

      if(a.skill > b.skill) {
        comparison = -1;
      } else {
        comparison = 1;
      }
      return comparison;
    };

    case 'pointsAsc':
    return (a, b) => {

      if(a.points > b.points) {
        comparison = 1;
      } else {
        comparison = -1;
      }
      return comparison;
    };

    case 'pointsDesc':
    return (a, b) => {

      if(a.points > b.points) {
        comparison = -1;
      } else {
        comparison = 1;
      }
      return comparison;
    };

  }
}



export const filterResults = ({ text, faction, minPoints = -3, maxPoints = 100, sortMethod }, data) => {
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
