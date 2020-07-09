import { combineReducers } from "redux";
import deviceTypeReducer from "./deviceType/deviceType.reducer";

const rootReducer = combineReducers({
  deviceType: deviceTypeReducer,
});

export default rootReducer;
