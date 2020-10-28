export const checkScreenSize = (mobileView, tabView, desktopView, loaded) => {
  let screenSize = window.innerWidth;
  let requestedView = "";

  const viewType = {
    mobile: () => mobileView(),
    medium: () => tabView(),
    large: () => desktopView(),
  };

  const device = {
    mobile: "mobile",
    medium: "medium",
    large: "large",
  };

  requestedView = checkScreen(screenSize, device);
  if (!(loaded === requestedView) && requestedView !== undefined) {
    changeView(requestedView, viewType);
  }
};

const changeView = (requestedView, viewType) => {
  try {
    viewType[requestedView]();
  } catch (error) {
    console.error(error);
  }
};

const checkScreen = (screenSize, device) => {
  if (screenSize < 661) {
    return device.mobile;
  } else if (screenSize > 661 && screenSize < 955) {
    return device.medium;
  } else if (screenSize > 955) {
    return device.large;
  }
};
