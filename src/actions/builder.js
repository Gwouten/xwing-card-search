export const builderSetup = (squadName, squadFaction, squadPoints) => ({
  type: 'BUILDER_SETUP_SQUAD',
  squadName,
  squadFaction,
  squadPoints
});

export const builderSetPilot = (pilot) => ({
  type: 'BUILDER_SET_PILOT',
  pilot
});

export const builderRemovePilot = (pilotIndex) => ({
  type: 'BUILDER_REMOVE_PILOT',
  pilotIndex
});
