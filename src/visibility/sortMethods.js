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

export default sortMethodFunction;
