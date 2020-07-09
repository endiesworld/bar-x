// ACTION TYPES FOR SCREEN SIZE DEFINED BELLOW
const MOBILE_VIEW = "MOBILE_VIEW";
const DESKTOP_VIEW = "DESKTOP_VIEW";

// ACTION CREATORS FOR SCREEN TYPES DEFINED BELLOW
export const loadMobileView = () => {
  return {
    type: MOBILE_VIEW,
  };
};

export const loadDesktopView = () => {
  return {
    type: DESKTOP_VIEW,
  };
};
