const convertToIcon = (slots) => {
  let iconSlots = [];
  slots.map((slot) => {
    switch(slot) {

      case "Modification":
      return iconSlots.push("m");

      case "Title":
      return iconSlots.push("t");

      case "Crew":
      return iconSlots.push("W");

      case "Elite":
      return iconSlots.push("E");

      case "Illicit":
      return iconSlots.push("I");

      case "System":
      return iconSlots.push("S");

      case "Astromech":
      return iconSlots.push("A");

      case "Salvaged Astromech":
      return iconSlots.push("V");

      case "Tech":
      return iconSlots.push("X");

      case "Missile":
      return iconSlots.push("M");

      case "Torpedo":
      return iconSlots.push("P");

      case "Bomb":
      return iconSlots.push("B");

      case "Cannon":
      return iconSlots.push("C");

      case "Turret":
      return iconSlots.push("U");

      case "Hardpoint":
      return iconSlots.push("H");

      case "Team":
      return iconSlots.push("T");

      case "Cargo":
      return iconSlots.push("G");

      default:
      return '';

    }
  });
  return iconSlots;
}

export default convertToIcon;
