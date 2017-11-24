export const pilotsList = (pilots) => (
  {
    type: 'SET_PILOT_LIST',
    pilots
  }
);

export const startPilotsList = (url) => (dispatch) => {
    fetch(url)
    .then((res) => res.json())
    .then((pilots) => {
      dispatch(pilotsList(pilots))
    })
    .catch((error) => {
      console.log('An error has occured', error);
    });
  };
