export const notificationDataInfo = () => {
  return {
    title: 'Looks like your request is the same...',
    message: 'Please enter new request!',
    type: 'info',
    insert: 'top',
    container: 'top-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  };
};

export const notificationDataError = () => {
  return {
    title: 'Could not find anything',
    message: 'Please try new request',
    type: 'danger',
    insert: 'top',
    container: 'top-left',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  };
};
