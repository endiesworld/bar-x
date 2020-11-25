// ACTION TYPES FOR SCREEN SIZE DEFINED BELLOW
export const MOBILE_VIEW = "MOBILE_VIEW";
export const DESKTOP_VIEW = "DESKTOP_VIEW";
export const TAB_VIEW = "TAB_VIEW";

// ACTION CREATORS FOR SCREEN TYPES DEFINED BELLOW
export const loadMobileView = () => {
  return {
    type: MOBILE_VIEW,
    payload: "mobile",
  };
};

export const loadTabView = () => {
  return {
    type: TAB_VIEW,
    payload: "tab",
  };
};

export const loadDesktopView = () => {
  return {
    type: DESKTOP_VIEW,
    payload: "large",
  };
};
