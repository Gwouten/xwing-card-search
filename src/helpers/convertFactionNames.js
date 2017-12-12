export const convertFactionNames = (faction) => {
  switch(faction) {

    case 'Rebel Alliance':
    return 'rebel';

    case 'Galactic Empire':
    return 'empire';

    case 'Scum and Villainy':
    return 'scum';

    case 'First Order':
    return 'empire';

    case 'Resistance':
    return 'rebel';

    default:
    return 'any';
  }
}
