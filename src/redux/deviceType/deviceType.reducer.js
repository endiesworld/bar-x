import { MOBILE_VIEW, DESKTOP_VIEW, TAB_VIEW } from "./deviceType.action"

const INIT_STATE = {
  deviceType: "",
};

const deviceTypeReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case MOBILE_VIEW:
      return {
        ...state,
        deviceType: action.payload,
      };

    case DESKTOP_VIEW:
      return {
        ...state,
        deviceType: action.payload,
      };
    case TAB_VIEW:
      return {
        ...state,
        deviceType: action.payload,
      };
    default:
      return state;
  }
};

export default deviceTypeReducer;
