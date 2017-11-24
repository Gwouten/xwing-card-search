export const upgradesList = (upgrades) => (
  {
    type: 'SET_UPGRADE_LIST',
    upgrades
  }
);

export const startUpgradesList = (url) => (dispatch) => {
    fetch(url)
    .then((res) => res.json())
    .then((upgrades) => {
      dispatch(upgradesList(upgrades))
    })
    .catch((error) => {
      console.log('An error has occured', error);
    });
  };
