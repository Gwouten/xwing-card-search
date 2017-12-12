export const builderSetPilot = (pilot) => ({
  type: 'BUILDER_SET_PILOT',
  pilot
});

export const builderRemovePilot = (pilotIndex) => ({
  type: 'BUILDER_REMOVE_PILOT',
  pilotIndex
});
