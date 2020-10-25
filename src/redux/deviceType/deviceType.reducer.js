const INIT_STATE = {
  deviceType: "",
};

const deviceTypeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "MOBILE_VIEW":
      return {
        ...state,
        deviceType: "mobile",
      };

    case "DESKTOP_VIEW":
      return {
        ...state,
        deviceType: "large",
      };
    case "TAB_VIEW":
      return {
        ...state,
        deviceType: "medium",
      };
    default:
      return state;
  }
};

export default deviceTypeReducer;
